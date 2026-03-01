<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["go-back"]);

const goBack = () => {
  emit("go-back");
};

const readingTime = computed(() => {
  return props.post.readingTime || 1;
});

// Variable substitution
const variables = ref({});

const extractVariables = (content) => {
  // Find all non-escaped $[variable] patterns
  const regex = /(?<!\\)\$\[([^\]]+)\]/g;
  const found = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    found.add(match[1]);
  }
  return Array.from(found);
};

const variableNames = computed(() => {
  return extractVariables(props.post.content);
});

const substituteVariables = (content) => {
  // First, protect escaped variables with a placeholder
  const escapedVars = [];
  let processed = content.replace(/\\\$\[([^\]]+)\]/g, (match, varName) => {
    const placeholder = `__ESCAPED_VAR_${escapedVars.length}__`;
    escapedVars.push(`$[${varName}]`);
    return placeholder;
  });

  // Then substitute non-escaped variables
  processed = processed.replace(/\$\[([^\]]+)\]/g, (match, varName) => {
    return variables.value[varName] || varName;
  });

  // Finally, restore escaped variables as literal $[var] text
  escapedVars.forEach((escapedVar, i) => {
    processed = processed.replace(`__ESCAPED_VAR_${i}__`, escapedVar);
  });

  return processed;
};

const processedContent = computed(() => {
  return substituteVariables(props.post.content);
});

// Apply inline markdown transformations (links, bold, italic, inline code, images, strikethrough).
// Used to process content inside hint/details blocks which are extracted before the main pipeline.
const processInline = (text) => {
  let result = text;

  // Protect internal __PLACEHOLDER__ tokens from being mangled by inline regexes
  const protected_ = [];
  result = result.replace(/__([A-Z_0-9]+)__/g, (match) => {
    const ph = `\x00PROT${protected_.length}\x00`;
    protected_.push(match);
    return ph;
  });

  // Inline code
  const inlineCodes = [];
  result = result.replace(/`([^`]+)`/g, (match, code) => {
    const ph = `__IC_${inlineCodes.length}__`;
    inlineCodes.push(
      `<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">${code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</code>`,
    );
    return ph;
  });

  // Bold italic, bold, italic
  result = result.replace(
    /\*\*\*(.*?)\*\*\*/g,
    '<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>',
  );
  result = result.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-catppuccin-mauve font-semibold">$1</strong>',
  );
  result = result.replace(
    /_(.*?)_/g,
    '<em class="text-catppuccin-text italic">$1</em>',
  );
  result = result.replace(
    /\*(.*?)\*/g,
    '<em class="text-catppuccin-text italic">$1</em>',
  );

  // Strikethrough
  result = result.replace(
    /~~(.*?)~~/g,
    '<del class="text-catppuccin-subtle line-through">$1</del>',
  );

  // Images (before links)
  result = result.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">',
  );

  // Links
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>',
  );

  // Restore inline codes
  inlineCodes.forEach((code, j) => {
    result = result.replaceAll(`__IC_${j}__`, code);
  });

  // Restore protected placeholders
  protected_.forEach((original, j) => {
    result = result.replaceAll(`\x00PROT${j}\x00`, original);
  });

  return result;
};

const parseMarkdown = (content) => {
  let html = content;
  const codeBlocks = [];

  // Extract code blocks first to avoid processing their content
  // Supports ```lang or ```lang:filename syntax
  html = html.replace(
    /```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,
    (match, lang, filename, code) => {
      const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
      const escapedCode = code
        .trim()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\\`/g, "`");
      const languageClass = lang ? `language-${lang.toLowerCase()}` : "";
      const blockId = `code-block-${codeBlocks.length}`;
      const displayLang = lang ? lang.toLowerCase() : "text";
      const displayFilename = filename || "";

      const headerBar = `<div class="flex items-center justify-between bg-catppuccin-crust border border-catppuccin-surface/50 border-b-0 rounded-t px-3 py-1.5 text-xs">
      <div class="flex items-center gap-1">
        ${
          displayFilename
            ? `<span class="text-catppuccin-text">${displayFilename}</span><span class="text-catppuccin-subtle">(${displayLang})</span>`
            : `<span class="text-catppuccin-mauve font-medium">${displayLang}</span>`
        }
      </div>
      <button data-clipboard-target="#${blockId}" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors cursor-pointer">copy</button>
    </div>`;

      codeBlocks.push(
        `<div class="my-4">
        ${headerBar}
        <pre class="bg-catppuccin-base/50 border border-catppuccin-surface/50 rounded-t-none rounded-b p-4 overflow-x-auto mt-0"><code id="${blockId}" class="${languageClass}">${escapedCode}</code></pre>
      </div>`,
      );
      return placeholder;
    },
  );

  // Extract hint/callout blocks FIRST so their ::: closing doesn't interfere with details parsing
  // Syntax: :::hint type\nContent\n:::
  // Types: info, warning, tip, danger
  const hintBlocks = [];
  html = html.replace(
    /:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,
    (match, type, content) => {
      const placeholder = `__HINT_${hintBlocks.length}__`;
      hintBlocks.push({
        type: type.trim().toLowerCase(),
        content: content.trim(),
      });
      return placeholder;
    },
  );

  // Extract details/dropdown blocks in a loop so innermost blocks are replaced first,
  // enabling arbitrary nesting. Hints inside are already placeholders.
  // Syntax: :::details Title\nContent\n:::
  const detailsBlocks = [];
  let detailsChanged = true;
  while (detailsChanged) {
    const before = html;
    html = html.replace(
      /:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,
      (match, title, content) => {
        const placeholder = `__DETAILS_${detailsBlocks.length}__`;
        detailsBlocks.push({ title: title.trim(), content: content.trim() });
        return placeholder;
      },
    );
    detailsChanged = html !== before;
  }

  // Handle escaped backticks before processing inline code
  const escapedBackticks = [];
  html = html.replace(/\\`/g, () => {
    const placeholder = `__ESCAPED_BACKTICK_${escapedBackticks.length}__`;
    escapedBackticks.push("`");
    return placeholder;
  });

  // Extract inline code early to prevent processing inside backticks
  const inlineCodeBlocks = [];
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const placeholder = `__INLINECODE_${inlineCodeBlocks.length}__`;
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    inlineCodeBlocks.push(
      `<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">${escapedCode}</code>`,
    );
    return placeholder;
  });

  // Extract tables
  const tables = [];
  html = html.replace(/((?:\|[^\n]+\|\r?\n?)+)/g, (match) => {
    const lines = match.trim().split(/\r?\n/);
    if (lines.length < 2) return match;

    const hasSeparator = /^\|[\s\-:|]+\|$/.test(lines[1]);
    if (!hasSeparator) return match;

    const placeholder = `__TABLE_${tables.length}__`;
    const headerRow = lines[0];
    const dataRows = lines.slice(2);

    let tableHtml = '<table class="w-full my-4 text-sm border-collapse">';

    const headers = headerRow.split("|").filter((c) => c.trim());
    tableHtml += "<thead><tr>";
    headers.forEach((h) => {
      tableHtml += `<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${h.trim()}</th>`;
    });
    tableHtml += "</tr></thead>";

    tableHtml += "<tbody>";
    dataRows.forEach((row) => {
      if (row.trim() && !/^\|[\s\-:|]+\|$/.test(row)) {
        const cells = row.split("|").filter((c) => c.trim());
        tableHtml += "<tr>";
        cells.forEach((c) => {
          tableHtml += `<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`;
        });
        tableHtml += "</tr>";
      }
    });
    tableHtml += "</tbody></table>";

    tables.push(tableHtml);
    return placeholder;
  });

  // Horizontal rules (---, ***, ___)
  html = html.replace(
    /^(?:---|\*\*\*|___)\s*$/gim,
    '<hr class="border-catppuccin-surface my-6">',
  );

  // Helper to create slug from heading text
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single
      .trim();
  };

  // Headings (process h3 first to avoid conflicts)
  html = html.replace(/^### (.*$)/gim, (match, p1) => {
    const slug = slugify(p1);
    return `<h3 id="${slug}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`;
  });
  html = html.replace(/^## (.*$)/gim, (match, p1) => {
    const slug = slugify(p1);
    return `<h2 id="${slug}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`;
  });
  html = html.replace(/^# (.*$)/gim, (match, p1) => {
    const slug = slugify(p1);
    return `<h1 id="${slug}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`;
  });

  // Blockquotes
  html = html.replace(
    /^> (.*$)/gim,
    '<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>',
  );

  // Images (before links to avoid conflict)
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">',
  );

  // Bold and italic (process bold first)
  html = html.replace(
    /\*\*\*(.*?)\*\*\*/g,
    '<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>',
  );
  html = html.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-catppuccin-mauve font-semibold">$1</strong>',
  );
  html = html.replace(
    /\*(.*?)\*/g,
    '<em class="text-catppuccin-text italic">$1</em>',
  );

  // Strikethrough
  html = html.replace(
    /~~(.*?)~~/g,
    '<del class="text-catppuccin-subtle line-through">$1</del>',
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>',
  );

  // Task lists (process before other lists)
  html = html.replace(
    /^[\-\*\+] \[x\] (.*$)/gim,
    '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>',
  );
  html = html.replace(
    /^[\-\*\+] \[ \] (.*$)/gim,
    '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>',
  );

  // Ordered lists - mark with data attribute for wrapping
  html = html.replace(
    /^\d+\. (.*$)/gim,
    '<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>',
  );

  // Unordered lists - mark with data attribute for wrapping
  html = html.replace(
    /^[\-\*\+] (.*$)/gim,
    '<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>',
  );

  // Wrap consecutive list items in <ol> or <ul>
  html = html.replace(
    /(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,
    (match) => `<ol class="list-decimal my-4 pl-2">${match}</ol>`,
  );
  html = html.replace(
    /(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,
    (match) => `<ul class="list-disc my-4">${match}</ul>`,
  );

  // Clean up data attributes
  html = html.replace(/ data-list-type="[^"]+"/g, "");

  // Handle paragraphs - split by double newlines for paragraphs
  const blockElements =
    /^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;

  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      // Skip empty blocks
      if (trimmed.length === 0) {
        return block;
      }
      // Skip placeholders
      if (
        trimmed.startsWith("__CODEBLOCK_") ||
        trimmed.startsWith("__TABLE_") ||
        trimmed.startsWith("__DETAILS_") ||
        trimmed.startsWith("__HINT_")
      ) {
        return block;
      }

      // Process each line within the block
      const lines = block.split("\n");
      const processedLines = [];
      let paragraphLines = [];

      const flushParagraph = () => {
        if (paragraphLines.length > 0) {
          const content = paragraphLines.join("<br>");
          processedLines.push(
            `<p class="text-catppuccin-text leading-relaxed mb-4">${content}</p>`,
          );
          paragraphLines = [];
        }
      };

      lines.forEach((line) => {
        const lineTrimmed = line.trim();
        if (lineTrimmed.length === 0) {
          flushParagraph();
          processedLines.push(line);
        } else if (
          blockElements.test(lineTrimmed) ||
          lineTrimmed.startsWith("__CODEBLOCK_") ||
          lineTrimmed.startsWith("__TABLE_") ||
          lineTrimmed.startsWith("__DETAILS_") ||
          lineTrimmed.startsWith("__HINT_")
        ) {
          flushParagraph();
          processedLines.push(line);
        } else {
          paragraphLines.push(line.trim());
        }
      });

      flushParagraph();
      return processedLines.join("\n");
    })
    .join("\n\n");

  // Restore details/dropdown blocks in REVERSE order so outer blocks (higher indices, extracted last)
  // are inserted into the HTML first, leaving inner __DETAILS_N__ placeholders for subsequent passes.
  for (let i = detailsBlocks.length - 1; i >= 0; i--) {
    const block = detailsBlocks[i];
    const detailsHtml = `<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors">
        ${processInline(block.title)}
      </summary>
      <div class="p-4 bg-catppuccin-base/30">${processInline(block.content)}</div>
    </details>`;
    html = html.replaceAll(`__DETAILS_${i}__`, detailsHtml);
  }

  // Restore hint/callout blocks (before code blocks so their content gets processed)
  const hintStyles = {
    info: {
      bg: "bg-catppuccin-blue/10",
      border: "border-catppuccin-blue/50",
      icon: "i",
      title: "Info",
    },
    warning: {
      bg: "bg-catppuccin-yellow/10",
      border: "border-catppuccin-yellow/50",
      icon: "!",
      title: "Warning",
    },
    tip: {
      bg: "bg-catppuccin-green/10",
      border: "border-catppuccin-green/50",
      icon: "*",
      title: "Tip",
    },
    danger: {
      bg: "bg-catppuccin-red/10",
      border: "border-catppuccin-red/50",
      icon: "x",
      title: "Danger",
    },
    note: {
      bg: "bg-catppuccin-mauve/10",
      border: "border-catppuccin-mauve/50",
      icon: "#",
      title: "Note",
    },
  };
  hintBlocks.forEach((block, i) => {
    const style = hintStyles[block.type] || hintStyles.info;
    const hintHtml = `<div class="my-4 ${style.bg} ${style.border} border-l-4 rounded-r px-4 py-3">
      <div class="flex items-center gap-2 font-medium text-catppuccin-text mb-1">
        <span class="font-mono text-sm">[${style.icon}]</span>
        <span>${style.title}</span>
      </div>
      <div class="text-catppuccin-text text-sm">${processInline(block.content)}</div>
    </div>`;
    html = html.replaceAll(`__HINT_${i}__`, hintHtml);
  });

  // Restore code blocks (now includes those inside details/hints)
  codeBlocks.forEach((block, i) => {
    html = html.replaceAll(`__CODEBLOCK_${i}__`, block);
  });

  // Restore tables
  tables.forEach((table, i) => {
    html = html.replaceAll(`__TABLE_${i}__`, table);
  });

  // Restore inline code blocks
  inlineCodeBlocks.forEach((block, i) => {
    html = html.replaceAll(`__INLINECODE_${i}__`, block);
  });

  // Restore escaped backticks as literal backticks
  escapedBackticks.forEach((backtick, i) => {
    html = html.replaceAll(`__ESCAPED_BACKTICK_${i}__`, backtick);
  });

  return html;
};

const runPrismHighlight = () => {
  if (window.Prism) {
    Prism.highlightAll();
    // Remove language-* classes from <pre> elements (keep them on <code>)
    document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
      pre.className = pre.className.replace(/language-\S+/g, "").trim();
    });
  }
};

onMounted(() => {
  setTimeout(runPrismHighlight, 100);
});

// Re-run syntax highlighting when variables change
watch(
  variables,
  () => {
    nextTick(() => {
      runPrismHighlight();
    });
  },
  { deep: true },
);
</script>

<template>
  <div>
    <div class="mb-8">
      <div class="text-catppuccin-subtle text-sm mb-2">
        ~$ cat {{ post.slug }}.md
      </div>

      <button
        @click="goBack"
        class="text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"
      >
        [← back to posts]
      </button>

      <h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-3">
        {{ post.title }}
      </h1>

      <div class="flex items-center gap-4 text-sm text-catppuccin-subtle mb-4">
        <span>{{ post.date }}</span>
        <span class="text-catppuccin-surface">•</span>
        <span>~{{ readingTime }} min read</span>
        <span class="text-catppuccin-surface">•</span>
        <div class="flex gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="text-catppuccin-gray"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Variable Input Section -->
    <div
      v-if="variableNames.length > 0"
      class="mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"
    >
      <div class="text-sm text-catppuccin-subtle mb-3">
        ~$ configure variables
      </div>
      <div class="space-y-3">
        <div
          v-for="varName in variableNames"
          :key="varName"
          class="flex items-center gap-3"
        >
          <label
            :for="`var-${varName}`"
            class="text-sm text-catppuccin-text min-w-[120px]"
          >
            {{ varName }}:
          </label>
          <input
            :id="`var-${varName}`"
            v-model="variables[varName]"
            type="text"
            :placeholder="varName"
            class="flex-1 px-3 py-1.5 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"
          />
        </div>
      </div>
    </div>

    <article class="border-l-2 border-catppuccin-surface pl-4 mb-8">
      <div
        class="prose prose-invert max-w-none text-catppuccin-text"
        v-html="parseMarkdown(processedContent)"
      ></div>
    </article>

    <button
      @click="goBack"
      class="text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"
    >
      [← back to all posts]
    </button>
  </div>
</template>

<style scoped>
article :deep(a) {
  word-break: break-word;
}

article :deep(ul) {
  margin: 1rem 0;
}

article :deep(pre) {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

article :deep(code) {
  font-family: "JetBrains Mono", monospace;
}

/* Override browser autofill styles */
/* Chrome, Safari, Edge (Chromium) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px var(--catppuccin-base, #1e1e2e) inset !important;
  -webkit-text-fill-color: var(--catppuccin-text, #cdd6f4) !important;
  caret-color: var(--catppuccin-text, #cdd6f4) !important;
  transition: background-color 5000s ease-in-out 0s;
}

/* Firefox */
input:autofill {
  background-color: var(--catppuccin-base, #1e1e2e) !important;
  color: var(--catppuccin-text, #cdd6f4) !important;
  border-color: var(--catppuccin-surface, #313244) !important;
  filter: none !important;
}
</style>
