<script setup>
import { computed } from "vue";
import { lanyardData } from "@/services/lanyardService";

const discordStatusColor = computed(() => lanyardData.discordStatusColor);
const spotify = computed(() => lanyardData.spotify);
const discordStatus = computed(() => lanyardData.discordStatus);
const discordUser = computed(() => lanyardData.discordUser);
const editorActivity = computed(() => lanyardData.editorActivity);
const isLoading = computed(() => lanyardData.isLoading);

const editorStatus = computed(() => {
  if (!editorActivity.value) return null;

  if (
    editorActivity.value.details &&
    editorActivity.value.details.toLowerCase().includes("idling")
  ) {
    return "idling";
  }

  const editorName = editorActivity.value.name;
  const isZed = editorName === "Zed";
  const isIntelliJ =
    editorName === "IntelliJ IDEA Ultimate" || editorName === "IntelliJ IDEA";
  const isAndroidStudio = editorName === "Android Studio";
  const isJetBrains = isIntelliJ || isAndroidStudio;

  let filename = "";
  let workspace = "";

  if (isJetBrains) {
    filename = editorActivity.value.details || "";
    workspace = editorActivity.value.state || "";
  } else if (isZed) {
    filename = editorActivity.value.state || "";
    workspace = editorActivity.value.details || "";
  } else {
    filename = editorActivity.value.details || "";
    workspace = editorActivity.value.state || "";
  }

  filename = filename
    .replace(/editing /i, "")
    .replace(/working on /i, "")
    .trim();

  workspace = workspace
    .replace(/in /i, "")
    .replace(/workspace: /i, "")
    .trim();

  return {
    name: editorName,
    workspace,
    filename,
  };
});
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

      <div class="flex items-center flex-wrap gap-4 text-sm">
        <router-link
          to="/blog"
          class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors"
        >
          [blog]
        </router-link>
        <a
          href="https://github.com/Hecker-01"
          target="_blank"
          class="text-catppuccin-subtle hover:text-catppuccin-text transition-colors"
        >
          [github]
        </a>
      </div>
    </div>

    <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
      <div class="text-catppuccin-subtle text-sm mb-2">~$ cat about.txt</div>
      <p class="text-catppuccin-text leading-relaxed mb-4">
        Hi! I'm HeckerDev, I code things for Minecraft, Discord, random CLI
        tools, websites, and recently I've been very invested in Android
        development.<br />
        I have experience in a lot of different programming languages and
        frameworks, and I love learning new ones!
      </p>
    </div>

    <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
      <div class="text-catppuccin-subtle text-sm mb-2">
        ~$ ps aux | grep hecker
      </div>
      <div class="space-y-1 text-sm">
        <div v-if="!isLoading && discordUser" class="flex items-center gap-2">
          <span class="text-catppuccin-blue">discord</span>
          <span class="text-catppuccin-subtle">:</span>
          <span class="text-catppuccin-text">{{ discordUser.username }}</span>
          <span :class="discordStatusColor">[{{ discordStatus }}]</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-catppuccin-green">spotify</span>
          <span class="text-catppuccin-subtle">:</span>
          <span
            v-if="!isLoading && spotify"
            class="text-catppuccin-text truncate"
          >
            {{ spotify.song }} - {{ spotify.artist }}
          </span>
          <span v-else class="text-catppuccin-subtle">not playing</span>
        </div>

        <div
          v-if="
            !isLoading &&
            editorActivity &&
            editorStatus &&
            (editorStatus.workspace || editorStatus.filename)
          "
          class="flex items-center gap-2"
        >
          <span class="text-catppuccin-blue">{{
            editorStatus.name === "Zed"
              ? "zed"
              : editorStatus.name === "IntelliJ IDEA Ultimate" ||
                  editorStatus.name === "IntelliJ IDEA"
                ? "intellij"
                : editorStatus.name === "Android Studio"
                  ? "android-studio"
                  : "vscode"
          }}</span>
          <span class="text-catppuccin-subtle">:</span>
          <span class="text-catppuccin-text truncate">
            <span v-if="editorStatus.workspace">{{
              editorStatus.workspace.toLowerCase()
            }}</span>
            <span
              v-if="editorStatus.workspace && editorStatus.filename"
              class="text-catppuccin-subtle"
            >
              /
            </span>
            <span v-if="editorStatus.filename">{{
              editorStatus.filename.toLowerCase()
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
