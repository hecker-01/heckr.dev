<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const pathDisplay = computed(() => {
  const p = route.fullPath || route.path || "/";
  const trimmed = p.replace(/^\//, "");
  return trimmed || ".";
});

const goHome = () => router.push("/");
</script>

<template>
  <div
    class="w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div class="mb-8">
        <div class="text-catppuccin-subtle text-sm mb-4">
          ~$ cd ~/{{ pathDisplay }}
        </div>

        <div class="flex items-center gap-4 text-sm mb-6">
          <button
            @click="goHome"
            class="text-catppuccin-subtle hover:text-catppuccin-text transition-colors"
          >
            [← home]
          </button>
        </div>
      </div>

      <div class="border-l-2 border-catppuccin-surface pl-4">
        <div class="text-catppuccin-red text-sm">
          cd: no such file or directory: /<span class="text-catppuccin-mauve">{{
            pathDisplay
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
