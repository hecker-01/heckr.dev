<script setup>
import { computed, ref, onMounted } from "vue";
import { lanyardData } from "@/services/lanyardService";

const discordStatusColor = computed(() => lanyardData.discordStatusColor);
const spotify = computed(() => lanyardData.spotify);
const discordStatus = computed(() => lanyardData.discordStatus);
const discordUser = computed(() => lanyardData.discordUser);
const editorActivity = computed(() => lanyardData.editorActivity);
const isLoading = computed(() => lanyardData.isLoading);

// Browser detection
const browserInfo = ref({ name: "", version: "" });

onMounted(() => {
  const ua = navigator.userAgent;
  let name = "Unknown";
  let version = "";

  if (ua.includes("Firefox/")) {
    name = "Firefox";
    version = ua.match(/Firefox\/(\d+(\.\d+)?)/)?.[1] || "";
  } else if (ua.includes("Edg/")) {
    name = "Edge";
    version = ua.match(/Edg\/(\d+(\.\d+)?)/)?.[1] || "";
  } else if (ua.includes("Chrome/")) {
    name = "Chrome";
    version = ua.match(/Chrome\/(\d+(\.\d+)?)/)?.[1] || "";
  } else if (ua.includes("Safari/") && !ua.includes("Chrome")) {
    name = "Safari";
    version = ua.match(/Version\/(\d+(\.\d+)?)/)?.[1] || "";
  } else if (ua.includes("Opera") || ua.includes("OPR/")) {
    name = "Opera";
    version = ua.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1] || "";
  }

  browserInfo.value = { name, version };
});

// ASCII art - customize this!
const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠛⢻⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢀⠴⢦⡀⠀⠀⣀⡤⠞⠋⠁⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠉⢷⡋⠀⣀⣿⠶⠛⠁⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠶⠦⠤⣤⡞⠀⠀⠈⢻⢾⣫⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⣀⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⣴⠫⢊⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⢉⡏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠤⠤⠤⣄⠀⠀⠀⠀⣀⣀⠀⠀⠀⢼⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⢠⡴⠚⠉⠀⠀⠀⠀⠀⠀⠁⠀⠀⠉⠀⣸⢀⡠⢦⠔⠃⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⢧⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⢸⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⢀⡞⠧⠤⣬⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⠿⠖⠛⡇⠀⠀⠀
⢴⣞⡁⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⣰⣶⣿⡿⠟⢉⣁⡤⠤⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
⠀⠈⠉⠛⣻⠟⠁⠀⠀⠀⠀⡿⠀⠀⣼⣿⡿⠁⠀⠀⠀⠀⠒⠒⠒⠀⠀⠀⠀⢀⠀⠀⠀⠀⣠⣼⠗⣦⠀⠀
⠀⠀⠀⢰⡇⠀⠀⠀⠀⢀⡼⢁⡴⠀⠘⠿⠁⠘⣿⢲⡆⠈⠳⠄⠀⠀⠀⠀⢰⠃⡼⢶⣰⠞⠉⠀⠀⠘⣧⠀
⠀⠀⠀⠀⢻⡀⢀⣀⡴⢋⣴⠟⣡⠆⠀⠀⠀⢀⡇⡰⡇⠀⠀⠀⠀⠀⢀⠔⠋⢰⡇⠀⠁⠀⠀⠀⠀⠀⢸⡆
⠀⠀⠀⠀⣠⣿⣿⣿⡇⠘⠱⠋⠁⠀⣀⣠⡤⢎⠸⢀⡇⠀⠀⠀⠀⠀⣀⠀⠀⠀⠙⣦⡀⠀⠀⠀⠀⠀⠘⣷
⠀⠀⠀⠀⠹⣿⣿⡟⠀⢀⣠⡴⠺⡏⠁⢀⡀⠸⣀⡼⠁⠀⠀⠀⠀⣴⠙⢧⣠⣤⠤⠞⠋⠀⠀⠀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠈⢹⠦⢴⡋⠁⠀⠦⡨⢖⡂⢀⡴⠋⢀⣠⠶⠲⢤⣀⡟⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿
⠀⠀⠀⠀⠀⠀⡿⠀⠀⠉⣒⣦⣤⣾⣤⣟⣡⠤⠶⠉⠀⠀⠀⠀⣉⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃
⠀⠀⠀⠀⢀⡴⠁⠀⢀⣠⣽⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠸⠃⢉⡽⠛⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠃⠀
⠀⠀⠀⠀⠛⠛⠚⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠠⢶⣿⣅⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣆
⠀⠀⠀⠀⠀⠀⢸⣧⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⠞⠋⠉
`
  .trim()
  .split("\n");

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

const editorLabel = computed(() => {
  if (!editorStatus.value || editorStatus.value === "idling") return null;
  const name = editorStatus.value.name;
  if (name === "Zed") return "zed";
  if (name === "IntelliJ IDEA Ultimate" || name === "IntelliJ IDEA")
    return "intellij";
  if (name === "Android Studio") return "android-studio";
  return "vscode";
});
</script>

<template>
  <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
    <div class="text-catppuccin-subtle text-sm mb-2">~$ neofetch --live</div>

    <!-- Neofetch style layout -->
    <div
      class="flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center"
    >
      <!-- ASCII Art (hidden on very small screens) -->
      <div class="hidden sm:block flex-shrink-0 ascii-tooltip-wrapper">
        <pre
          class="text-catppuccin-mauve text-xs select-none ascii-art"
          aria-label="Art credit: @vilthuril.rah on Instagram"
        ><template v-for="(line, i) in asciiArt" :key="i">{{ line }}
</template></pre>
        <span class="ascii-tooltip"
          >Art by
          <a
            href="https://www.instagram.com/vilthuril.rah/"
            target="_blank"
            rel="noopener noreferrer"
            class="ascii-tooltip-link"
            >@vilthuril.rah</a
          >
          on Instagram</span
        >
      </div>

      <!-- System Info -->
      <div class="space-y-0.5 min-w-0 flex-1">
        <!-- User@Host header -->
        <div class="mb-1">
          <span class="text-catppuccin-mauve font-bold">heck</span
          ><span class="text-catppuccin-blue font-bold">OS</span
          ><span class="text-catppuccin-subtle"> (v0.1.0)</span>
        </div>
        <div class="text-catppuccin-surface mb-2">------------------</div>

        <!-- Browser -->
        <div v-if="browserInfo.name" class="flex">
          <span class="text-catppuccin-mauve font-bold w-20 flex-shrink-0"
            >browser</span
          >
          <span class="text-catppuccin-subtle mr-1">-</span>
          <span class="text-catppuccin-text truncate"
            >{{ browserInfo.name }} {{ browserInfo.version }}</span
          >
        </div>

        <!-- Discord -->
        <div v-if="!isLoading && discordUser" class="flex">
          <span class="text-catppuccin-mauve font-bold w-20 flex-shrink-0"
            >discord</span
          >
          <span class="text-catppuccin-subtle mr-1">-</span>
          <span class="text-catppuccin-text">{{ discordUser.username }}</span>
          <span :class="discordStatusColor" class="ml-1"
            >[{{ discordStatus }}]</span
          >
        </div>

        <!-- Spotify -->
        <div v-if="!isLoading && spotify" class="flex">
          <span class="text-catppuccin-mauve font-bold w-20 flex-shrink-0"
            >spotify</span
          >
          <span class="text-catppuccin-subtle mr-1">-</span>
          <span class="text-catppuccin-text truncate"
            >{{ spotify.song }} - {{ spotify.artist }}</span
          >
        </div>

        <!-- Editor -->
        <div
          v-if="
            !isLoading &&
            editorActivity &&
            editorStatus &&
            editorStatus !== 'idling' &&
            (editorStatus.workspace || editorStatus.filename)
          "
          class="flex"
        >
          <span class="text-catppuccin-mauve font-bold w-20 flex-shrink-0">{{
            editorLabel
          }}</span>
          <span class="text-catppuccin-subtle mr-1">-</span>
          <span class="text-catppuccin-text truncate">
            <span v-if="editorStatus.workspace">{{
              editorStatus.workspace.toLowerCase()
            }}</span>
            <span
              v-if="editorStatus.workspace && editorStatus.filename"
              class="text-catppuccin-subtle"
              >/</span
            >
            <span v-if="editorStatus.filename">{{
              editorStatus.filename.toLowerCase()
            }}</span>
          </span>
        </div>

        <div class="text-catppuccin-surface mb-2">------------------</div>

        <!-- Color palette like neofetch -->
        <div class="flex gap-0.5 mt-3">
          <span class="w-4 h-4 rounded-sm bg-catppuccin-red"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-peach"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-yellow"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-green"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-teal"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-blue"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-mauve"></span>
          <span class="w-4 h-4 rounded-sm bg-catppuccin-pink"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ascii-art {
  font-size: 0.6rem;
  letter-spacing: -0.1em;
  line-height: 1.1;
}

.ascii-tooltip-wrapper {
  position: relative;
  cursor: default;
  padding-bottom: 1.75rem;
  margin-bottom: -1.75rem;
}

.ascii-tooltip {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: var(--catppuccin-surface, #313244);
  color: var(--catppuccin-subtle, #a6adc8);
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.ascii-tooltip-wrapper:hover .ascii-tooltip {
  opacity: 1;
  pointer-events: auto;
}

.ascii-tooltip-link {
  color: var(--catppuccin-mauve, #cba6f7);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.ascii-tooltip-link:hover {
  color: var(--catppuccin-pink, #f5c2e7);
}
</style>
