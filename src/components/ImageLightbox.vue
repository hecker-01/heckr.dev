<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: "" },
});

const emit = defineEmits(["close"]);
const scale = ref(1);
const tx = ref(0);
const ty = ref(0);
const MIN_SCALE = 1;
const MAX_SCALE = 4;

let isGesturing = false;
let startDist = 0;
let startScale = 1;
let startTx = 0;
let startTy = 0;
let startX = 0;
let startY = 0;
let lastTap = 0;

const imageStyle = computed(() => ({
  transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})`,
  transition: isGesturing ? "none" : "transform 0.2s ease",
}));

const resetZoom = () => {
  scale.value = 1;
  tx.value = 0;
  ty.value = 0;
};

const close = () => {
  resetZoom();
  emit("close");
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
    const now = Date.now();
    if (now - lastTap < 300) {
      scale.value > 1 ? resetZoom() : (scale.value = 2);
      lastTap = 0;
      return;
    }
    lastTap = now;
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

const handleKeydown = (event) => {
  if (event.key === "Escape" && props.src) close();
};

watch(() => props.src, resetZoom);
onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="src"
        class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out"
        @click="close"
      >
        <button
          type="button"
          class="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-2xl leading-none font-light text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors"
          aria-label="Close image"
          @click="close"
        >
          ×
        </button>
        <img
          :src="src"
          :alt="alt"
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
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
