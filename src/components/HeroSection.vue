<script setup>
import { getLinks } from "@/services/linksService";
import NeofetchStatus from "@/components/NeofetchStatus.vue";

const links = getLinks();
</script>

<template>
  <div class="mb-6">
    <div class="mb-6">
      <div class="text-catppuccin-subtle text-sm mb-2">~$ whoami</div>
      <h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2">
        <span class="text-catppuccin-mauve">jesse</span>
        <span class="text-catppuccin-subtle">@</span>
        <span class="text-catppuccin-blue">heckr.dev</span>
      </h1>
      <div class="text-sm text-catppuccin-gray 6">
        <span class="text-catppuccin-subtle">aka </span
        ><span class="text-catppuccin-green">Hecker_01</span>
      </div>

      <div class="flex items-center flex-wrap gap-3 text-sm mt-4">
        <template v-for="link in links" :key="link.id">
          <router-link
            v-if="!link.external"
            :to="link.href"
            class="px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group"
            :style="{
              '--accent-color': link.accentColor,
            }"
          >
            <span
              class="text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
              >cd</span
            >
            <span
              class="font-medium transition-colors"
              :style="{ color: link.accentColor }"
              >~/{{ link.label }}</span
            >
          </router-link>
          <a
            v-else
            :href="link.href"
            target="_blank"
            class="px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group"
            :style="{
              '--accent-color': link.accentColor,
            }"
          >
            <span
              class="text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
              >cd</span
            >
            <span
              class="font-medium transition-colors"
              :style="{ color: link.accentColor }"
              >~/{{ link.label }}</span
            >
            <svg
              class="w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </template>
      </div>
    </div>

    <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
      <div class="text-catppuccin-subtle text-sm mb-2">~$ cat about.txt</div>
      <p class="text-catppuccin-text leading-relaxed mb-4">
        Hi! I'm Jesse, a Dutch Software Development Student at Grafisch Lyceum
        Rotterdam. <br />
        I code all sorts of tools and applications mainly for my own use, but
        also plugins for Minecraft and Discord bots, but my main goal is to have
        fun while doing so! <br />
        My passion is Frontend development, but I also enjoy working on backend
        and mobile projects. <br />
        I've got experience in a lot of different
        <a
          href="#languages"
          class="text-catppuccin-mauve underline hover:no-underline"
          >programming languages</a
        >
        and frameworks, and I love learning new ones!
      </p>
    </div>

    <NeofetchStatus />
  </div>
</template>

<style scoped>
.group:hover {
  border-color: color-mix(
    in srgb,
    var(--accent-color) 40%,
    transparent
  ) !important;
}
</style>
