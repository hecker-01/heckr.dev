<script setup>
import { computed, onMounted } from "vue";
import { formatDate } from "@/services/blogService";

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

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

const readingTime = computed(() => {
  const text = props.post.content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return calculateReadingTime(text);
});

const parseMarkdown = (content) => {
  let html = content;
  const codeBlocks = [];
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
                <pre class="bg-catppuccin-surface/50 border border-catppuccin-overlay/30 rounded p-4 overflow-x-auto my-4"><code id="${blockId}" class="${languageClass}">${escapedCode}</code></pre>
            </div>`,
    );
    return placeholder;
  });

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

  html = html.replace(
    /^### (.*$)/gim,
    '<h3 class="text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">$1</h3>',
  );
  html = html.replace(
    /^## (.*$)/gim,
    '<h2 class="text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">$1</h2>',
  );
  html = html.replace(
    /^# (.*$)/gim,
    '<h1 class="text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">$1</h1>',
  );

  html = html.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-catppuccin-mauve font-semibold">$1</strong>',
  );
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">$1</code>',
  );
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" class="text-catppuccin-blue hover:text-catppuccin-mauve underline transition-colors">$1</a>',
  );
  html = html.replace(
    /^\- (.*$)/gim,
    '<li class="ml-6 list-disc text-catppuccin-text mb-1">$1</li>',
  );

  html = html
    .split("\n\n")
    .map((p) => {
      if (
        !p.trim().startsWith("<") &&
        !p.trim().startsWith("__CODEBLOCK_") &&
        !p.trim().startsWith("__TABLE_")
      ) {
        return `<p class="text-catppuccin-text leading-relaxed mb-4">${p}</p>`;
      }
      return p;
    })
    .join("\n");

  codeBlocks.forEach((block, i) => {
    html = html.replace(`__CODEBLOCK_${i}__`, block);
  });

  tables.forEach((table, i) => {
    html = html.replace(`__TABLE_${i}__`, table);
  });

  return html;
};

onMounted(() => {
  setTimeout(() => {
    if (window.Prism) {
      Prism.highlightAll();
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
        <span>{{ formatDate(post.date) }}</span>
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

    <article class="border-l-2 border-catppuccin-surface pl-4 mb-8">
      <div
        class="prose prose-invert max-w-none text-catppuccin-text"
        v-html="parseMarkdown(post.content)"
      ></div>
    </article>

    <div class="border-l-2 border-catppuccin-surface pl-4">
      <button
        @click="goBack"
        class="text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"
      >
        [← back to all posts]
      </button>
    </div>
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
