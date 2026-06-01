<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
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

// Image lightbox
const lightboxSrc = ref(null);
const lightboxAlt = ref("");

// Pinch-to-zoom / pan state
const scale = ref(1);
const tx = ref(0);
const ty = ref(0);
const MIN_SCALE = 1;
const MAX_SCALE = 4;

const imageStyle = computed(() => ({
    transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})`,
    transition: isGesturing ? "none" : "transform 0.2s ease",
}));

let isGesturing = false;
let startDist = 0;
let startScale = 1;
let startTx = 0;
let startTy = 0;
let startX = 0;
let startY = 0;
let lastTap = 0;

const resetZoom = () => {
    scale.value = 1;
    tx.value = 0;
    ty.value = 0;
};

const touchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
};

const onTouchStart = (event) => {
    if (event.touches.length === 2) {
        isGesturing = true;
        startDist = touchDistance(event.touches);
        startScale = scale.value;
    } else if (event.touches.length === 1) {
        // Double-tap to toggle zoom
        const now = Date.now();
        if (now - lastTap < 300) {
            scale.value > 1 ? resetZoom() : (scale.value = 2);
            lastTap = 0;
            return;
        }
        lastTap = now;
        // Begin pan (only meaningful when zoomed in)
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        startTx = tx.value;
        startTy = ty.value;
    }
};

const onTouchMove = (event) => {
    if (event.touches.length === 2) {
        event.preventDefault();
        const dist = touchDistance(event.touches);
        const next = (startScale * dist) / startDist;
        scale.value = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
    } else if (event.touches.length === 1 && scale.value > 1) {
        event.preventDefault();
        tx.value = startTx + (event.touches[0].clientX - startX);
        ty.value = startTy + (event.touches[0].clientY - startY);
    }
};

const onTouchEnd = (event) => {
    if (event.touches.length === 0) {
        isGesturing = false;
        if (scale.value <= MIN_SCALE) resetZoom();
    }
};

const handleArticleClick = (event) => {
    const img = event.target.closest("img");
    if (!img) return;
    resetZoom();
    lightboxSrc.value = img.currentSrc || img.src;
    lightboxAlt.value = img.alt || "";
};

const closeLightbox = () => {
    lightboxSrc.value = null;
    lightboxAlt.value = "";
    resetZoom();
};

const handleKeydown = (event) => {
    if (event.key === "Escape" && lightboxSrc.value) {
        closeLightbox();
    }
};

onMounted(() => {
    highlightService.highlightAfterDelay(100);
    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
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
                class="text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"
            >
                <span
                    class="text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
                    >cd</span
                >
                <span class="text-catppuccin-mauve font-medium">~/posts</span>
            </button>

            <h1
                class="text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"
            >
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
            @click="handleArticleClick"
        >
            <div
                class="prose prose-invert max-w-none text-catppuccin-text"
                v-html="parseMarkdown(processedContent)"
            ></div>
        </article>

        <button
            @click="goBack"
            class="text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"
        >
            <span
                class="text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
                >cd</span
            >
            <span class="text-catppuccin-mauve font-medium">~/posts</span>
        </button>

        <!-- Image lightbox -->
        <Teleport to="body">
            <Transition name="lightbox-fade">
                <div
                    v-if="lightboxSrc"
                    class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out"
                    @click="closeLightbox"
                >
                    <button
                        type="button"
                        class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors"
                        aria-label="Close image"
                        @click="closeLightbox"
                    >
                        ✕
                    </button>
                    <img
                        :src="lightboxSrc"
                        :alt="lightboxAlt"
                        :style="imageStyle"
                        class="max-w-full max-h-screen sm:max-h-[90vh] object-contain rounded-none sm:rounded-md shadow-2xl cursor-default touch-none select-none"
                        @click.stop
                        @touchstart="onTouchStart"
                        @touchmove="onTouchMove"
                        @touchend="onTouchEnd"
                    />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
article :deep(a) {
    word-break: break-word;
}

article :deep(img) {
    cursor: zoom-in;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
    transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
    opacity: 0;
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
