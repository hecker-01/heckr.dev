<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { lanyardData } from "@/services/lanyardService";
import { getShowcaseItems } from "@/services/showcaseService";
import { getAllReposWithLanguages } from "@/services/githubService";

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

  let filename = isZed
    ? editorActivity.value.state || ""
    : editorActivity.value.details || "";

  let workspace = isZed
    ? editorActivity.value.details || ""
    : editorActivity.value.state || "";

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

const repos = ref([]);
const reposLoading = ref(true);
const languages = ref([]);
const showcaseItems = ref([]);
const currentShowcaseIndex = ref(0);
const isHovering = ref(false);
let showcaseInterval = null;

const currentShowcaseItem = computed(() => {
  if (!showcaseItems.value.length) return null;
  return showcaseItems.value[currentShowcaseIndex.value];
});

const displayedRepos = computed(() => {
  if (!repos.value.length) return [];

  return [...repos.value]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
});

const fetchProjects = async () => {
  try {
    reposLoading.value = true;
    const { repos: repoData, languages: langData } =
      await getAllReposWithLanguages("hecker-01");
    repos.value = repoData;
    languages.value = langData;
  } catch {
  } finally {
    reposLoading.value = false;
  }
};

onMounted(() => {
  fetchProjects();
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
  <div class="w-full min-h-screen overflow-x-hidden font-mono">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div class="mb-12">
        <div class="mb-8">
          <div class="text-catppuccin-subtle text-sm mb-2">~$ whoami</div>
          <h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2">
            <span class="text-catppuccin-mauve">jesse</span>
            <span class="text-catppuccin-subtle">@</span>
            <span class="text-catppuccin-blue">heckerdev.net</span>
          </h1>
          <div class="text-sm text-catppuccin-gray mb-4">
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
            <!-- <a
              href="https://open.spotify.com/user/jesse_flantua"
              target="_blank"
              class="text-catppuccin-subtle hover:text-catppuccin-green transition-colors"
            >
              [spotify]
            </a> -->
          </div>
        </div>

        <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
          <div class="text-catppuccin-subtle text-sm mb-2">
            ~$ cat about.txt
          </div>
          <p class="text-catppuccin-text leading-relaxed mb-4">
            Hi! I'm HeckerDev, I code things for Minecraft, Discord, random CLI
            tools & websites<br />
            I have experince in alot of different programming languages and
            frameworks, and I love learning new ones!
          </p>
        </div>

        <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
          <div class="text-catppuccin-subtle text-sm mb-2">
            ~$ ps aux | grep hecker
          </div>
          <div class="space-y-1 text-sm">
            <div
              v-if="!isLoading && discordUser"
              class="flex items-center gap-2"
            >
              <span class="text-catppuccin-blue">discord</span>
              <span class="text-catppuccin-subtle">:</span>
              <span class="text-catppuccin-text">{{
                discordUser.username
              }}</span>
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
                editorStatus.name === "Zed" ? "zed" : "vscode"
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

        <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
          <div class="text-catppuccin-subtle text-sm mb-2">~$ ls ~/tools</div>
          <div v-if="reposLoading" class="text-sm text-catppuccin-subtle">
            loading languages...
          </div>
          <div
            v-else-if="languages.length"
            class="text-sm text-catppuccin-text"
          >
            <span v-for="(lang, index) in languages" :key="lang.language">
              {{ lang.language }}({{ lang.count }})<span
                v-if="index < languages.length - 1"
                class="text-catppuccin-subtle"
              >
                |
              </span>
            </span>
          </div>
          <div v-else class="text-sm text-catppuccin-subtle">
            no languages found
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 lg:items-start">
        <div
          class="border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col"
        >
          <div class="text-catppuccin-subtle text-sm mb-3">
            ~$ ls ~/projects
          </div>

          <div v-if="reposLoading" class="space-y-2">
            <div
              v-for="i in 6"
              :key="`repo-loading-${i}`"
              class="rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3 animate-pulse"
            >
              <div class="flex items-start gap-3">
                <span class="text-catppuccin-subtle">></span>
                <div class="flex-1 min-w-0">
                  <div
                    class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2"
                  ></div>
                  <div class="h-2 bg-catppuccin-surface/50 rounded w-1/3"></div>
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

        <div
          class="border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col"
        >
          <div class="text-catppuccin-subtle text-sm mb-3">
            ~$ cat ~/showcase
          </div>

          <div
            v-if="!showcaseItems.length"
            class="text-sm text-catppuccin-subtle"
          >
            no items to showcase
          </div>

          <div
            v-else
            class="relative min-h-48 flex-1"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
          >
            <Transition name="showcase" mode="out-in">
              <a
                v-if="currentShowcaseItem"
                :key="currentShowcaseItem.id"
                :href="currentShowcaseItem.link"
                target="_blank"
                class="group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 h-full flex flex-col"
                :style="{ borderColor: `${currentShowcaseItem.accentColor}40` }"
              >
                <div
                  v-if="currentShowcaseItem.screenshot"
                  class="w-full flex-1 overflow-hidden bg-catppuccin-surface/30"
                >
                  <img
                    :src="currentShowcaseItem.screenshot"
                    :alt="currentShowcaseItem.name"
                    class="w-full h-full min-h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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

            <!-- Indicator dots -->
            <div
              v-if="showcaseItems.length > 1"
              class="flex justify-center gap-1.5 mt-3"
            >
              <button
                v-for="(item, index) in showcaseItems"
                :key="`dot-${item.id}`"
                @click="currentShowcaseIndex = index"
                class="w-1.5 h-1.5 rounded-full transition-all"
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
