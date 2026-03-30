<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Footer from "@/components/Footer.vue";

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
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
      <div class="mb-8">
        <div class="text-catppuccin-subtle text-sm mb-4">
          ~$ cd ~/{{ pathDisplay }}
        </div>

        <div class="flex items-center gap-4 text-sm mb-6">
          <button
            @click="goHome"
            class="px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"
          >
            <span
              class="text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
              >cd</span
            >
            <span class="text-catppuccin-mauve font-medium">~/</span>
            <span class="text-catppuccin-subtle font-medium">(home)</span>
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
    <Footer />
  </div>
</template>
