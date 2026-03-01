/**
 * Applies inline markdown transformations: bold, italic, strikethrough,
 * inline code, images, and links.
 *
 * Used both as a standalone processor (for hint/details block content)
 * and internally by MarkdownParser during the full pipeline.
 */
export class InlineParser {
  /**
   * Process inline markdown in a text fragment.
   * Protects internal __PLACEHOLDER__ tokens from being mangled.
   * @param {string} text - Text to transform.
   * @returns {string} HTML with inline formatting applied.
   */
  process(text) {
    let result = text;

    // Protect internal __PLACEHOLDER__ tokens from being mangled by inline regexes
    const protectedTokens = [];
    result = result.replace(/__([A-Z_0-9]+)__/g, (match) => {
      const ph = `\x00PROT${protectedTokens.length}\x00`;
      protectedTokens.push(match);
      return ph;
    });

    // Inline code (extract early to prevent processing inside backticks)
    const inlineCodes = [];
    result = result.replace(/`([^`]+)`/g, (match, code) => {
      const ph = `\x01IC${inlineCodes.length}\x01`;
      inlineCodes.push(this._renderInlineCode(code));
      return ph;
    });

    // Bold italic → bold → underline italic → asterisk italic
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

    // Images (before links to avoid conflict)
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
      result = result.replaceAll(`\x01IC${j}\x01`, code);
    });

    // Restore protected placeholders
    protectedTokens.forEach((original, j) => {
      result = result.replaceAll(`\x00PROT${j}\x00`, original);
    });

    return result;
  }

  /**
   * Render a single inline code span.
   * @param {string} code - Raw code text (not yet escaped).
   * @returns {string} HTML string for the inline code element.
   */
  _renderInlineCode(code) {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${escaped}</code>`;
  }
}

export default new InlineParser();
