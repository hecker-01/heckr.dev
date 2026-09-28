const unquote = (value) => {
  const trimmed = value.trim();
  const quote = trimmed[0];

  if (quote === "\"" || quote === "'") {
    return trimmed.at(-1) === quote ? trimmed.slice(1, -1) : null;
  }

  return trimmed;
};

const parseInlineArray = (value, sourceName, lineNumber) => {
  if (!value.endsWith("]")) {
    throw new Error(
      `${sourceName}: invalid front matter on line ${lineNumber}: expected ']' to close the list`,
    );
  }

  const list = value.slice(1, -1).trim();
  if (!list) return [];

  const items = [];
  let item = "";
  let quote = null;

  for (const character of list) {
    if (quote) {
      item += character;
      if (character === quote) quote = null;
    } else if (character === "\"" || character === "'") {
      quote = character;
      item += character;
    } else if (character === ",") {
      items.push(unquote(item));
      item = "";
    } else {
      item += character;
    }
  }

  if (quote) {
    throw new Error(
      `${sourceName}: invalid front matter on line ${lineNumber}: unmatched quote in list`,
    );
  }

  items.push(unquote(item));
  return items;
};

const parseValue = (value, sourceName, lineNumber) => {
  const trimmed = value.trim();

  if (trimmed.startsWith("[")) {
    return parseInlineArray(trimmed, sourceName, lineNumber);
  }

  const quote = trimmed[0];
  if (quote === "\"" || quote === "'") {
    const unquoted = unquote(trimmed);
    if (unquoted === null) {
      throw new Error(
        `${sourceName}: invalid front matter on line ${lineNumber}: unmatched quote`,
      );
    }

    return unquoted;
  }

  if (trimmed.endsWith("\"") || trimmed.endsWith("'")) {
    throw new Error(
      `${sourceName}: invalid front matter on line ${lineNumber}: unmatched quote`,
    );
  }

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed;
};

export const parseFrontmatter = (source, sourceName = "content") => {
  const opening = source.match(/^---[ \t]*\r?\n/);
  if (!opening) return { frontmatter: {}, content: source };

  const bodyStart = opening[0].length;
  const closing = /^(?:---)[ \t]*\r?$/m.exec(source.slice(bodyStart));
  if (!closing) {
    throw new Error(
      `${sourceName}: front matter opened on line 1 is missing its closing --- delimiter`,
    );
  }

  const frontmatterText = source.slice(bodyStart, bodyStart + closing.index);
  const content = source
    .slice(bodyStart + closing.index + closing[0].length)
    .replace(/^\r?\n/, "");
  const frontmatter = {};
  const seenKeys = new Set();
  const lines = frontmatterText.split(/\r?\n/);
  let currentKey = null;
  let currentValue = "";
  let currentLine = 0;

  const saveCurrentField = () => {
    if (currentKey !== null) {
      frontmatter[currentKey] = parseValue(
        currentValue,
        sourceName,
        currentLine,
      );
    }
  };

  for (const [index, line] of lines.entries()) {
    const lineNumber = index + 2;
    if (!line.trim() || /^\s*#/.test(line)) continue;

    const field = line.match(/^\s*([\w-]+):(?:[ \t]*(.*))?$/);
    if (field) {
      saveCurrentField();

      const key = field[1];
      if (seenKeys.has(key)) {
        throw new Error(
          `${sourceName}: duplicate front matter key '${key}' on line ${lineNumber}`,
        );
      }

      currentKey = key;
      currentValue = field[2] ?? "";
      currentLine = lineNumber;
      seenKeys.add(key);
      continue;
    }

    if (/^\s+/.test(line) && currentKey) {
      currentValue += `${currentValue ? " " : ""}${line.trim()}`;
      continue;
    }

    throw new Error(
      `${sourceName}: invalid front matter on line ${lineNumber}: expected a 'key: value' pair`,
    );
  }

  saveCurrentField();
  return { frontmatter, content };
};

export const resolveContentSlug = (
  frontmatter,
  filename,
  sourceName = filename,
) => {
  const basename = String(filename).replace(/\\/g, "/").split("/").at(-1);
  const filenameSlug = basename.replace(/\.md$/i, "");
  const slug =
    frontmatter.slug === undefined || frontmatter.slug === ""
      ? filenameSlug
      : frontmatter.slug;

  if (typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(
      `${sourceName}: invalid slug '${slug}': use lowercase letters, numbers, and single hyphens`,
    );
  }

  return slug;
};
