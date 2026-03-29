<script setup>
defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
  selectedTag: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["open-project", "select-tag"]);

const openProject = (slug) => {
  emit("open-project", slug);
};
</script>

<template>
  <div class="sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2">
    <div class="text-catppuccin-subtle text-sm mb-3">
      ~$ ls -la projects/
      <span v-if="selectedTag" class="text-catppuccin-mauve"
        >| grep "{{ selectedTag }}"</span
      >
    </div>

    <div v-if="!projects.length" class="text-sm text-catppuccin-subtle">
      no projects found
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="openProject(project.slug)"
        class="block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden"
        :style="{
          borderColor: `${project.accentColorHex}40`,
        }"
      >
        <!-- Cover Image -->
        <div
          v-if="project.coverImage"
          class="w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30"
        >
          <img
            :src="project.coverImage"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div class="px-3 sm:px-4 py-3">
          <div class="flex items-start gap-2 mb-2">
            <span
              class="text-sm transition-colors"
              :style="{ color: project.accentColorHex }"
              >></span
            >
            <h2
              class="text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"
              :style="{
                '--hover-color': project.accentColorHex,
              }"
            >
              {{ project.title }}
            </h2>
          </div>

          <p
            class="text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2"
          >
            {{ project.description }}
          </p>

          <div class="flex items-center gap-2 flex-wrap">
            <span
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              @click.stop="emit('select-tag', tag)"
              class="px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors"
              :style="{
                '--hover-bg': `${project.accentColorHex}20`,
              }"
            >
              #{{ tag }}
            </span>
            <span
              v-if="project.tags.length > 3"
              class="text-xs text-catppuccin-subtle"
            >
              +{{ project.tags.length - 3 }}
            </span>
            <span
              class="ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"
              :style="{
                '--hover-color': project.accentColorHex,
              }"
            >
              view →
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover h2 {
  color: var(--hover-color) !important;
}

.group:hover span:last-child {
  color: var(--hover-color);
}
</style>
