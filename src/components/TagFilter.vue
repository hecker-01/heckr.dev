<script setup>
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  selectedTag: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["toggle-tag"]);

const toggleTag = (tag) => {
  emit("toggle-tag", tag);
};
</script>

<template>
  <div class="border-l-2 border-catppuccin-surface pl-4">
    <div class="text-catppuccin-subtle text-sm mb-2">~$ ls tags/</div>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="toggleTag(tag)"
        :class="[
          'px-3 py-1 rounded text-xs transition-colors border',
          selectedTag === tag
            ? 'bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve'
            : 'bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay',
        ]"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>
