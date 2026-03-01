/**
 * Manages Prism.js syntax highlighting lifecycle.
 */
export class HighlightService {
  /**
   * Run Prism.js highlighting on all code blocks in the page.
   * Strips language-* classes from <pre> elements (keeps them on <code>).
   */
  highlightAll() {
    if (!window.Prism) return;

    Prism.highlightAll();

    document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
      pre.className = pre.className.replace(/language-\S+/g, "").trim();
    });
  }

  /**
   * Schedule a highlight pass after a short delay (useful on mount).
   * @param {number} delay - Milliseconds to wait before highlighting.
   */
  highlightAfterDelay(delay = 100) {
    setTimeout(() => this.highlightAll(), delay);
  }
}

export default new HighlightService();
