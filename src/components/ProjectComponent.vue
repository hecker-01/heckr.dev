<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import variableProcessor from "../services/variableService.js";
import markdownParser from "../services/markdownService.js";
import highlightService from "../services/highlightService.js";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["go-back"]);

const goBack = () => {
  emit("go-back");
};

// Variable substitution
const variables = ref({});

const variableNames = computed(() => {
  return variableProcessor.extractVariables(props.project.content);
});

const processedContent = computed(() => {
  return variableProcessor.substitute(props.project.content, variables.value);
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
  <div :style="{ '--accent-color': project.accentColorHex }">
    <div class="mb-8">
      <div class="text-catppuccin-subtle text-sm mb-2">
        ~$ cat {{ project.slug }}.md
      </div>

      <button
        @click="goBack"
        class="text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"
      >
        [← back to projects]
      </button>

      <!-- Cover Image -->
      <div
        v-if="project.coverImage"
        class="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border"
        :style="{ borderColor: `${project.accentColorHex}40` }"
      >
        <img
          :src="project.coverImage"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </div>

      <h1
        class="text-3xl md:text-4xl font-bold mb-3"
        :style="{ color: project.accentColorHex }"
      >
        {{ project.title }}
      </h1>

      <div
        class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4"
      >
        <!-- Status Badge -->
        <span
          class="px-2 py-0.5 rounded text-xs capitalize"
          :class="{
            'bg-catppuccin-green/20 text-catppuccin-green':
              project.status === 'active',
            'bg-catppuccin-yellow/20 text-catppuccin-yellow':
              project.status === 'in-progress',
            'bg-catppuccin-red/20 text-catppuccin-red':
              project.status === 'archived',
            'bg-catppuccin-blue/20 text-catppuccin-blue':
              project.status === 'beta',
          }"
        >
          {{ project.status }}
        </span>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-catppuccin-gray"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Links -->
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30"
          :style="{
            borderColor: `${project.accentColorHex}60`,
            color: project.accentColorHex,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Live Site
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          GitHub
        </a>
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
      [← back to all projects]
    </button>
  </div>
</template>

<style scoped>
/* Text selection color */
::selection {
  background: var(--accent-color);
  color: #1e1e2e;
}

:deep(::selection) {
  background: var(--accent-color);
  color: #1e1e2e;
}

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

/* Use accent color for headings */
article :deep(h2),
article :deep(h3) {
  color: var(--accent-color);
}

/* Accent color for links */
article :deep(a) {
  color: var(--accent-color);
}

article :deep(a:hover) {
  opacity: 0.8;
}

/* Accent color for strong/bold text */
article :deep(strong) {
  color: var(--accent-color);
}

/* Accent color for blockquote border */
article :deep(blockquote) {
  border-left-color: var(--accent-color);
}

/* Accent color for list markers */
article :deep(ul > li)::marker {
  color: var(--accent-color);
}

article :deep(ol > li)::marker {
  color: var(--accent-color);
}

/* Accent color for inline code */
article :deep(:not(pre) > code) {
  color: var(--accent-color);
  background-color: color-mix(in srgb, var(--accent-color) 10%, transparent);
}

/* Accent color for horizontal rules */
article :deep(hr) {
  border-color: color-mix(in srgb, var(--accent-color) 40%, transparent);
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
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px var(--catppuccin-base, #1e1e2e) inset !important;
  -webkit-text-fill-color: var(--catppuccin-text, #cdd6f4) !important;
  caret-color: var(--catppuccin-text, #cdd6f4) !important;
  transition: background-color 5000s ease-in-out 0s;
}

input:autofill {
  background-color: var(--catppuccin-base, #1e1e2e) !important;
  color: var(--catppuccin-text, #cdd6f4) !important;
  border-color: var(--catppuccin-surface, #313244) !important;
  filter: none !important;
}
</style>
