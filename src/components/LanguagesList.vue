<script setup>
defineProps({
  languages: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
    <div class="text-catppuccin-subtle text-sm mb-2">~$ ls ~/tools</div>
    <div v-if="loading" class="text-sm text-catppuccin-subtle">
      loading languages...
    </div>
    <div v-else-if="languages.length" class="text-sm text-catppuccin-text">
      <span v-for="(lang, index) in languages" :key="lang.language">
        {{ lang.language }}({{ lang.count }})<span
          v-if="index < languages.length - 1"
          class="text-catppuccin-subtle"
        >
          |
        </span>
      </span>
    </div>
    <div v-else class="text-sm text-catppuccin-subtle">no languages found</div>
  </div>
</template>
