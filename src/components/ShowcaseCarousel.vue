<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { getShowcaseItems } from "@/services/showcaseService";

const showcaseItems = ref([]);
const currentShowcaseIndex = ref(0);
const isHovering = ref(false);
let showcaseInterval = null;

const currentShowcaseItem = computed(() => {
  if (!showcaseItems.value.length) return null;
  return showcaseItems.value[currentShowcaseIndex.value];
});

onMounted(() => {
  showcaseItems.value = getShowcaseItems();

  // Start cycling through showcase items every 10 seconds (pause on hover)
  if (showcaseItems.value.length > 1) {
    showcaseInterval = setInterval(() => {
      if (!isHovering.value) {
        currentShowcaseIndex.value =
          (currentShowcaseIndex.value + 1) % showcaseItems.value.length;
      }
    }, 10000);
  }
});

onBeforeUnmount(() => {
  if (showcaseInterval) {
    clearInterval(showcaseInterval);
  }
});
</script>

<template>
  <div
    class="border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"
  >
    <div class="text-catppuccin-subtle text-sm mb-3">~$ cat ~/showcase</div>

    <div v-if="!showcaseItems.length" class="text-sm text-catppuccin-subtle">
      no items to showcase
    </div>

    <div
      v-else
      class="relative lg:flex-1 flex flex-col"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div class="lg:flex-1 lg:relative">
        <Transition name="showcase" mode="out-in">
          <a
            v-if="currentShowcaseItem"
            :key="currentShowcaseItem.id"
            :href="currentShowcaseItem.link"
            target="_blank"
            class="group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col"
            :style="{ borderColor: `${currentShowcaseItem.accentColor}40` }"
          >
            <div
              v-if="currentShowcaseItem.screenshot"
              class="w-full flex-1 overflow-hidden bg-catppuccin-surface/30"
            >
              <img
                :src="currentShowcaseItem.screenshot"
                :alt="currentShowcaseItem.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="px-3 py-3 flex-shrink-0">
              <div class="flex items-start gap-3">
                <span
                  class="transition-colors"
                  :style="{ color: currentShowcaseItem.accentColor }"
                  >></span
                >

                <div class="flex-1 min-w-0">
                  <h3
                    class="text-sm font-medium text-catppuccin-text transition-colors mb-1"
                    :style="{ color: currentShowcaseItem.accentColor }"
                  >
                    {{ currentShowcaseItem.name }}
                  </h3>

                  <p class="text-xs text-catppuccin-gray leading-relaxed">
                    {{ currentShowcaseItem.description }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Transition>
      </div>

      <!-- Indicator dots -->
      <div
        v-if="showcaseItems.length > 1"
        class="flex justify-center gap-1.5 mt-3 flex-shrink-0"
      >
        <button
          v-for="(item, index) in showcaseItems"
          :key="`dot-${item.id}`"
          @click="currentShowcaseIndex = index"
          class="w-2 h-2.5 rounded-full transition-all"
          :class="
            index === currentShowcaseIndex
              ? 'bg-catppuccin-mauve w-4'
              : 'bg-catppuccin-surface/60 hover:bg-catppuccin-surface'
          "
          :style="
            index === currentShowcaseIndex
              ? { backgroundColor: currentShowcaseItem.accentColor }
              : {}
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-enter-active {
  transition: all 0.5s ease-out;
}

.showcase-leave-active {
  transition: all 0.4s ease-in;
}

.showcase-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.showcase-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
