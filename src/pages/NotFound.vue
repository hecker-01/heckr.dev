<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Display a readable version of the current path for the faux-terminal
const pathDisplay = computed(() => {
  const p = route.fullPath || route.path || "/";
  // remove leading slash for the ~/ representation
  const trimmed = p.replace(/^\//, "");
  return trimmed || ".";
});

const goHome = () => router.push("/");
</script>

<template>
  <div
    class="w-full min-h-screen h-screen font-mono bg-terminal text-terminal-fg"
  >
    <div class="max-w-3xl mx-auto px-6 py-20">
      <div class="terminal-panel">
        <div class="term-line cmd">
          ~$ cd ~/<span class="path">{{ pathDisplay }}</span>
        </div>
        <div class="term-line err">
          cd: no such file or directory: /<span class="path">{{
            pathDisplay
          }}</span>
        </div>

        <div class="term-spacer" />

        <div class="term-line">
          <button @click="goHome" class="home-btn">[← home]</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-panel {
  background: linear-gradient(180deg, #07111a 0%, #041018 100%);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.02);
}

.term-line {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "JetBrains Mono",
    monospace;
  font-size: 1rem;
  color: #9bd0a8; /* a gentle green */
  line-height: 1.8;
  white-space: pre-wrap;
}

.cmd {
  color: #9bd0a8;
}
.err {
  color: #ff8080;
  margin-top: 6px;
}
.path {
  color: #c8f6ff;
}

.term-spacer {
  height: 18px;
}

.home-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #cfeeea;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
}
.home-btn:hover {
  background: rgba(255, 255, 255, 0.02);
}

:root {
  --terminal-bg: #041018;
}

.bg-terminal {
  background: var(--terminal-bg);
}
.text-terminal-fg {
  color: #9bd0a8;
}
</style>
