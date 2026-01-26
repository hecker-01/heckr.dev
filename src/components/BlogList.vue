<script setup>
import { formatDate } from "@/services/blogService";

defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
  selectedTag: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["open-post"]);

const openPost = (slug) => {
  emit("open-post", slug);
};
</script>

<template>
  <div class="border-l-2 border-catppuccin-surface pl-4">
    <div class="text-catppuccin-subtle text-sm mb-3">
      ~$ ls -la posts/
      <span v-if="selectedTag" class="text-catppuccin-mauve"
        >| grep "{{ selectedTag }}"</span
      >
    </div>

    <div v-if="!posts.length" class="text-sm text-catppuccin-subtle">
      no posts found
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="post in posts"
        :key="post.id"
        @click="openPost(post.slug)"
        class="block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"
      >
        <div class="px-4 py-3">
          <div class="flex items-start justify-between gap-4 mb-2">
            <h2
              class="text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"
            >
              {{ post.title }}
            </h2>
            <span class="text-xs text-catppuccin-subtle flex-shrink-0">
              {{ formatDate(post.date) }}
            </span>
          </div>

          <p class="text-sm text-catppuccin-gray mb-3 leading-relaxed">
            {{ post.excerpt }}
          </p>

          <div class="flex items-center gap-2">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle"
              >
                #{{ tag }}
              </span>
            </div>
            <span
              class="ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"
            >
              read →
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
