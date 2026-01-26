<script setup>
import { computed } from "vue";

const props = defineProps({
  repos: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const displayedRepos = computed(() => {
  if (!props.repos.length) return [];

  return [...props.repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
});
</script>

<template>
  <div
    class="border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"
  >
    <div class="text-catppuccin-subtle text-sm mb-3">~$ ls ~/projects</div>

    <div class="lg:flex-1 flex flex-col">
      <div v-if="loading" class="space-y-2">
        <div
          v-for="i in 6"
          :key="`repo-loading-${i}`"
          class="rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"
        >
          <div class="flex items-start gap-3">
            <span class="text-catppuccin-subtle">></span>
            <div class="flex-1 min-w-0">
              <div
                class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink"
              ></div>
              <div
                class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!repos.length" class="text-sm text-catppuccin-subtle">
        no projects found
      </div>

      <TransitionGroup
        v-else-if="displayedRepos.length"
        name="list"
        tag="div"
        class="space-y-2"
      >
        <a
          v-for="(repo, index) in displayedRepos"
          :key="repo.id"
          :href="repo.html_url"
          target="_blank"
          :style="{ transitionDelay: `${index * 50}ms` }"
          class="block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"
        >
          <div
            class="flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"
          >
            <span
              class="text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"
              >></span
            >

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span
                  class="text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate"
                  :title="repo.name"
                >
                  {{ repo.name }}
                </span>

                <span
                  v-if="repo.stargazers_count > 0"
                  class="text-catppuccin-yellow text-xs flex-shrink-0"
                >
                  ★{{ repo.stargazers_count }}
                </span>
              </div>

              <p
                class="text-xs text-catppuccin-gray truncate"
                :title="repo.description"
              >
                {{ repo.description || "no description" }}
              </p>
            </div>
          </div>
        </a>
      </TransitionGroup>

      <div v-else class="text-sm text-catppuccin-subtle">
        no repositories found
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active {
  transition: all 0.4s ease-out;
}

.list-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.list-move {
  transition: transform 0.4s ease;
}
</style>
