import { InlineParser } from "./inlineParserService.js";

/**
 * Full markdown-to-HTML parser.
 *
 * Orchestrates a pipeline of block-level extraction, inline transformation,
 * and placeholder restoration to convert markdown text into styled HTML.
 */
export class MarkdownParser {
  constructor(inlineParser = new InlineParser()) {
    /** @type {InlineParser} */
    this.inlineParser = inlineParser;
  }

  // --- public API ----------------------------------------------

  /**
   * Parse a markdown string into HTML.
   * @param {string} content - Markdown text (variables should already be substituted).
   * @returns {string} Rendered HTML string.
   */
  parse(content) {
    let html = content;

    // Accumulate extracted blocks for later restoration
    const ctx = {
      codeBlocks: [],
      hintBlocks: [],
      detailsBlocks: [],
      escapedTokens: [],
      inlineCodeBlocks: [],
      tables: [],
    };

    // -- extraction phase (order matters) --
    html = this._extractCodeBlocks(html, ctx);
    html = this._extractHintBlocks(html, ctx);
    html = this._extractDetailsBlocks(html, ctx);
    html = this._extractEscapeSequences(html, ctx);
    html = this._extractInlineCode(html, ctx);
    html = this._extractTables(html, ctx);

    // -- transformation phase --
    html = this._transformHorizontalRules(html);
    html = this._transformHeadings(html);
    html = this._transformBlockquotes(html);
    html = this._transformImages(html);
    html = this._transformBoldItalic(html);
    html = this._transformStrikethrough(html);
    html = this._transformLinks(html);
    html = this._transformLists(html);
    html = this._transformParagraphs(html);

    // -- restoration phase (reverse of extraction) --
    html = this._restoreDetailsBlocks(html, ctx);
    html = this._restoreHintBlocks(html, ctx);
    html = this._restoreCodeBlocks(html, ctx);
    html = this._restoreTables(html, ctx);
    html = this._restoreInlineCode(html, ctx);
    html = this._restoreEscapeSequences(html, ctx);

    return html;
  }

  // --- extraction helpers --------------------------------------

  _extractCodeBlocks(html, ctx) {
    return html.replace(
      /```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,
      (match, lang, filename, code) => {
        const placeholder = `__CODEBLOCK_${ctx.codeBlocks.length}__`;
        ctx.codeBlocks.push(
          this._renderCodeBlock(lang, filename, code, ctx.codeBlocks.length),
        );
        return placeholder;
      },
    );
  }

  _extractHintBlocks(html, ctx) {
    return html.replace(
      /:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,
      (match, type, content) => {
        const placeholder = `__HINT_${ctx.hintBlocks.length}__`;
        ctx.hintBlocks.push({
          type: type.trim().toLowerCase(),
          content: content.trim(),
        });
        return placeholder;
      },
    );
  }

  _extractDetailsBlocks(html, ctx) {
    let changed = true;
    while (changed) {
      const before = html;
      html = html.replace(
        /:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,
        (match, title, content) => {
          const placeholder = `__DETAILS_${ctx.detailsBlocks.length}__`;
          ctx.detailsBlocks.push({
            title: title.trim(),
            content: content.trim(),
          });
          return placeholder;
        },
      );
      changed = html !== before;
    }
    return html;
  }

  _extractEscapeSequences(html, ctx) {
    // Handle \\ → \ and \` → ` in a single pass (longer match first)
    return html.replace(/\\\\|\\`/g, (match) => {
      const placeholder = `__ESCAPED_TOKEN_${ctx.escapedTokens.length}__`;
      ctx.escapedTokens.push(match === "\\\\" ? "\\" : "`");
      return placeholder;
    });
  }

  _extractInlineCode(html, ctx) {
    return html.replace(/`([^`]+)`/g, (match, code) => {
      const placeholder = `__INLINECODE_${ctx.inlineCodeBlocks.length}__`;
      const escapedCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      ctx.inlineCodeBlocks.push(
        `<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${escapedCode}</code>`,
      );
      return placeholder;
    });
  }

  _extractTables(html, ctx) {
    return html.replace(/((?:\|[^\n]+\|\r?\n?)+)/g, (match) => {
      const lines = match.trim().split(/\r?\n/);
      if (lines.length < 2) return match;
      if (!/^\|[\s\-:|]+\|$/.test(lines[1])) return match;

      const placeholder = `__TABLE_${ctx.tables.length}__`;
      ctx.tables.push(this._renderTable(lines));
      return placeholder;
    });
  }

  // --- transformation helpers ----------------------------------

  _transformHorizontalRules(html) {
    return html.replace(
      /^(?:---|\*\*\*|___)\s*$/gim,
      '<hr class="border-catppuccin-surface my-6">',
    );
  }

  _transformHeadings(html) {
    html = html.replace(/^###### (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h6 id="${slug}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`;
    });
    html = html.replace(/^##### (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h5 id="${slug}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`;
    });
    html = html.replace(/^#### (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h4 id="${slug}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`;
    });
    html = html.replace(/^### (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h3 id="${slug}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`;
    });
    html = html.replace(/^## (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h2 id="${slug}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`;
    });
    html = html.replace(/^# (.*$)/gim, (match, p1) => {
      const slug = this._slugify(p1);
      return `<h1 id="${slug}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${p1}<a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`;
    });
    return html;
  }

  _transformBlockquotes(html) {
    return html.replace(
      /^> (.*$)/gim,
      '<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>',
    );
  }

  _transformImages(html) {
    return html.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">',
    );
  }

  _transformBoldItalic(html) {
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
    return html;
  }

  _transformStrikethrough(html) {
    return html.replace(
      /~~(.*?)~~/g,
      '<del class="text-catppuccin-subtle line-through">$1</del>',
    );
  }

  _transformLinks(html) {
    return html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>',
    );
  }

  _transformLists(html) {
    // Task lists
    html = html.replace(
      /^[\-\*\+] \[x\] (.*$)/gim,
      '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>',
    );
    html = html.replace(
      /^[\-\*\+] \[ \] (.*$)/gim,
      '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>',
    );

    // Ordered lists
    html = html.replace(
      /^\d+\. (.*$)/gim,
      '<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>',
    );

    // Unordered lists
    html = html.replace(
      /^[\-\*\+] (.*$)/gim,
      '<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>',
    );

    // Wrap consecutive list items
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

    return html;
  }

  _transformParagraphs(html) {
    const blockElements =
      /^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;

    return html
      .split("\n\n")
      .map((block) => {
        const trimmed = block.trim();
        if (trimmed.length === 0) return block;
        if (
          trimmed.startsWith("__CODEBLOCK_") ||
          trimmed.startsWith("__TABLE_") ||
          trimmed.startsWith("__DETAILS_") ||
          trimmed.startsWith("__HINT_")
        ) {
          return block;
        }

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
  }

  // --- restoration helpers -------------------------------------

  _restoreDetailsBlocks(html, ctx) {
    for (let i = ctx.detailsBlocks.length - 1; i >= 0; i--) {
      const block = ctx.detailsBlocks[i];
      const detailsHtml = `<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-3 sm:px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors text-sm sm:text-base">
        ${this.inlineParser.process(block.title)}
      </summary>
      <div class="p-3 sm:p-4 bg-catppuccin-base/30 text-sm">${this.inlineParser.process(block.content)}</div>
    </details>`;
      html = html.replaceAll(`__DETAILS_${i}__`, detailsHtml);
    }
    return html;
  }

  _restoreHintBlocks(html, ctx) {
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

    ctx.hintBlocks.forEach((block, i) => {
      const style = hintStyles[block.type] || hintStyles.info;
      const hintHtml = `<div class="my-4 ${style.bg} ${style.border} border-l-4 rounded-r px-3 sm:px-4 py-3">
      <div class="flex items-center gap-2 font-medium text-catppuccin-text mb-1 text-sm sm:text-base">
        <span class="font-mono text-sm">[${style.icon}]</span>
        <span>${style.title}</span>
      </div>
      <div class="text-catppuccin-text text-xs sm:text-sm">${this.inlineParser.process(block.content)}</div>
    </div>`;
      html = html.replaceAll(`__HINT_${i}__`, hintHtml);
    });
    return html;
  }

  _restoreCodeBlocks(html, ctx) {
    ctx.codeBlocks.forEach((block, i) => {
      html = html.replaceAll(`__CODEBLOCK_${i}__`, block);
    });
    return html;
  }

  _restoreTables(html, ctx) {
    ctx.tables.forEach((table, i) => {
      html = html.replaceAll(`__TABLE_${i}__`, table);
    });
    return html;
  }

  _restoreInlineCode(html, ctx) {
    ctx.inlineCodeBlocks.forEach((block, i) => {
      html = html.replaceAll(`__INLINECODE_${i}__`, block);
    });
    return html;
  }

  _restoreEscapeSequences(html, ctx) {
    ctx.escapedTokens.forEach((token, i) => {
      html = html.replaceAll(`__ESCAPED_TOKEN_${i}__`, token);
    });
    return html;
  }

  // --- rendering helpers ---------------------------------------

  _renderCodeBlock(lang, filename, code, index) {
    const escapedCode = code
      .trim()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\\`/g, "`");
    const languageClass = lang ? `language-${lang.toLowerCase()}` : "";
    const blockId = `code-block-${index}`;
    const displayLang = lang ? lang.toLowerCase() : "text";
    const displayFilename = filename || "";

    const headerBar = `<div class="flex items-center justify-between bg-catppuccin-crust border border-catppuccin-surface/50 border-b-0 rounded-t px-2 sm:px-3 py-1.5 text-xs">
      <div class="flex items-center gap-1 min-w-0 truncate">
        ${
          displayFilename
            ? `<span class="text-catppuccin-text truncate">${displayFilename}</span><span class="text-catppuccin-subtle shrink-0">(${displayLang})</span>`
            : `<span class="text-catppuccin-mauve font-medium">${displayLang}</span>`
        }
      </div>
      <button data-clipboard-target="#${blockId}" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors cursor-pointer shrink-0 ml-2 p-1">copy</button>
    </div>`;

    return `<div class="my-4 -mx-2 sm:mx-0">
        ${headerBar}
        <pre class="bg-catppuccin-base/50 border border-catppuccin-surface/50 rounded-t-none rounded-b p-2 sm:p-4 overflow-x-auto mt-0 text-xs sm:text-sm"><code id="${blockId}" class="${languageClass}">${escapedCode}</code></pre>
      </div>`;
  }

  _renderTable(lines) {
    const headerRow = lines[0];
    const dataRows = lines.slice(2);

    let tableHtml =
      '<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';

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
    tableHtml += "</tbody></table></div>";

    return tableHtml;
  }

  _slugify(text) {
    return text
      .toLowerCase()
      .replace(/<[^>]*>/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
}

export default new MarkdownParser();
