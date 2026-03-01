<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import variableProcessor from "../services/variableService.js";
import markdownParser from "../services/markdownService.js";
import highlightService from "../services/highlightService.js";

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

const variableNames = computed(() => {
  return variableProcessor.extractVariables(props.post.content);
});

const processedContent = computed(() => {
  return variableProcessor.substitute(props.post.content, variables.value);
});

const parseMarkdown = (content) => {
  return markdownParser.parse(content);
};

onMounted(() => {
  highlightService.highlightAfterDelay(100);
});

// Re-run syntax highlighting when variables change
watch(
  variables,
  () => {
    nextTick(() => {
      highlightService.highlightAll();
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

      <h1 class="text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3">
        {{ post.title }}
      </h1>

      <div
        class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"
      >
        <span>{{ post.date }}</span>
        <span class="hidden sm:inline text-catppuccin-surface">•</span>
        <span>~{{ readingTime }} min read</span>
        <span class="hidden sm:inline text-catppuccin-surface">•</span>
        <div class="flex flex-wrap gap-2">
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
          class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
        >
          <label
            :for="`var-${varName}`"
            class="text-sm text-catppuccin-text sm:min-w-[120px]"
          >
            {{ varName }}:
          </label>
          <input
            :id="`var-${varName}`"
            v-model="variables[varName]"
            type="text"
            :placeholder="varName"
            class="flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"
          />
        </div>
      </div>
    </div>

    <article
      class="sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"
    >
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

/* Remove top margin from the first child element in the article */
article :deep(> div > :first-child) {
  margin-top: 0 !important;
}

/* Remove bottom margin from the last child element in the article */
article :deep(> div > :last-child) {
  margin-bottom: 0 !important;
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

/* Mobile-specific overrides for rendered markdown */
@media (max-width: 639px) {
  article :deep(pre) {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  article :deep(code) {
    font-size: 0.75rem;
  }

  article :deep(h1) {
    font-size: 1.375rem;
  }

  article :deep(h2) {
    font-size: 1.125rem;
  }

  article :deep(h3) {
    font-size: 1rem;
  }

  article :deep(blockquote) {
    padding-left: 0.75rem;
    margin-left: 0;
    margin-right: 0;
  }

  article :deep(table) {
    font-size: 0.75rem;
  }

  article :deep(table th),
  article :deep(table td) {
    padding: 0.375rem 0.5rem;
  }

  article :deep(li) {
    margin-left: 1rem;
  }

  article :deep(img) {
    border-radius: 0.25rem;
  }
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
