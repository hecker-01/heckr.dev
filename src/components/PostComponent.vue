<script setup>
import { computed, onMounted, ref } from "vue";

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

const parseMarkdown = (content) => {
  let html = content;
  const codeBlocks = [];

  // Extract code blocks first to avoid processing their content
  html = html.replace(/```(\w*)\s*\n?([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
    const escapedCode = code
      .trim()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const languageClass = lang ? `language-${lang.toLowerCase()}` : "";
    const blockId = `code-block-${codeBlocks.length}`;
    codeBlocks.push(
      `<div class="relative group">
                <button data-clipboard-target="#${blockId}" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-catppuccin-subtle hover:text-catppuccin-mauve px-2 py-1 bg-catppuccin-crust border border-catppuccin-surface rounded hover:bg-catppuccin-mauve/10 cursor-pointer z-10">
                    copy
                </button>
                <pre class="bg-catppuccin-base/50 border border-catppuccin-base/30 rounded p-4 overflow-x-auto my-4"><code id="${blockId}" class="${languageClass}">${escapedCode}</code></pre>
            </div>`,
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

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">$1</code>',
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>',
  );

  // Ordered lists
  html = html.replace(
    /^\d+\. (.*$)/gim,
    '<li class="ml-6 list-decimal text-catppuccin-text mb-1">$1</li>',
  );

  // Unordered lists
  html = html.replace(
    /^[\-\*\+] (.*$)/gim,
    '<li class="ml-6 list-disc text-catppuccin-text mb-1">$1</li>',
  );

  // Task lists
  html = html.replace(
    /^[\-\*\+] \[ \] (.*$)/gim,
    '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>',
  );
  html = html.replace(
    /^[\-\*\+] \[x\] (.*$)/gim,
    '<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>',
  );

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
        trimmed.startsWith("__TABLE_")
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
          lineTrimmed.startsWith("__TABLE_")
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

  // Restore code blocks
  codeBlocks.forEach((block, i) => {
    html = html.replace(`__CODEBLOCK_${i}__`, block);
  });

  // Restore tables
  tables.forEach((table, i) => {
    html = html.replace(`__TABLE_${i}__`, table);
  });

  return html;
};

onMounted(() => {
  setTimeout(() => {
    if (window.Prism) {
      Prism.highlightAll();
      // Remove language-* classes from <pre> elements (keep them on <code>)
      document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
        pre.className = pre.className.replace(/language-\S+/g, "").trim();
      });
    }
  }, 100);
});
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
</style>
