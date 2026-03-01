/**
 * Handles extraction and substitution of $[variable] patterns in post content.
 */
export class VariableProcessor {
  /**
   * Extract all non-escaped $[variable] names from content.
   * @param {string} content - Raw markdown content.
   * @returns {string[]} Unique variable names found.
   */
  extractVariables(content) {
    const regex = /(?<!\\)\$\[([^\]]+)\]/g;
    const found = new Set();
    let match;
    while ((match = regex.exec(content)) !== null) {
      found.add(match[1]);
    }
    return Array.from(found);
  }

  /**
   * Replace $[variable] tokens with their values, preserving escaped literals.
   * @param {string} content - Raw markdown content.
   * @param {Record<string, string>} variables - Map of variable name → value.
   * @returns {string} Content with substitutions applied.
   */
  substitute(content, variables = {}) {
    // Protect escaped variables with a placeholder
    const escapedVars = [];
    let processed = content.replace(/\\\$\[([^\]]+)\]/g, (match, varName) => {
      const placeholder = `__ESCAPED_VAR_${escapedVars.length}__`;
      escapedVars.push(`$[${varName}]`);
      return placeholder;
    });

    // Substitute non-escaped variables
    processed = processed.replace(/\$\[([^\]]+)\]/g, (match, varName) => {
      return variables[varName] || varName;
    });

    // Restore escaped variables as literal $[var] text
    escapedVars.forEach((escapedVar, i) => {
      processed = processed.replace(`__ESCAPED_VAR_${i}__`, escapedVar);
    });

    return processed;
  }
}

export default new VariableProcessor();
