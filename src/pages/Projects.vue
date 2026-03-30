<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getAllProjects,
  getProjectBySlug,
  getAllTags,
} from "@/services/projectService";
import TagFilter from "@/components/TagFilter.vue";
import ProjectList from "@/components/ProjectList.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import Footer from "@/components/Footer.vue";

const view = ref("list");
const currentProject = ref(null);
const selectedTag = ref(null);
const projects = ref([]);
const tags = ref([]);

const route = useRoute();
const router = useRouter();

const filteredProjects = computed(() => {
  if (!selectedTag.value) return projects.value;
  return projects.value.filter((p) => p.tags.includes(selectedTag.value));
});

const loadProjects = () => {
  projects.value = getAllProjects();
  tags.value = getAllTags();
};

const openProject = (slug) => {
  currentProject.value = getProjectBySlug(slug);
  if (currentProject.value) {
    view.value = "project";
    window.scrollTo({ top: 0, behavior: "instant" });
    if (route.query.project !== slug) {
      router.replace({
        name: "Projects",
        query: { ...route.query, project: slug },
      });
    }
  } else if (route.query.project) {
    const newQuery = { ...route.query };
    delete newQuery.project;
    router.replace({ name: "Projects", query: newQuery });
  }
};

const goBack = ({ skipQueryUpdate = false } = {}) => {
  view.value = "list";
  currentProject.value = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (!skipQueryUpdate && "project" in route.query) {
    const newQuery = { ...route.query };
    delete newQuery.project;
    router.replace({ name: "Projects", query: newQuery });
  }
};

const toggleTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? null : tag;
};

onMounted(() => {
  loadProjects();
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY = "auto";

  // Initialize Clipboard.js
  const clipboard = new ClipboardJS("[data-clipboard-target]");
  clipboard.on("success", function (e) {
    const button = e.trigger;
    const originalText = button.textContent;
    button.textContent = "copied!";
    button.classList.add("text-catppuccin-green");
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("text-catppuccin-green");
    }, 2000);
    e.clearSelection();
  });

  // Initialize Prism syntax highlighting
  setTimeout(() => {
    if (window.Prism) {
      Prism.highlightAll();
    }
  }, 100);

  const slugFromQuery = route.query.project;
  if (slugFromQuery) {
    openProject(slugFromQuery);
  }
});

onBeforeUnmount(() => {
  document.documentElement.style.overflowY = "";
  document.body.style.overflowY = "";
});

watch(
  () => route.query.project,
  (slug, prevSlug) => {
    if (slug && slug !== prevSlug) {
      openProject(slug);
    } else if (!slug && view.value === "project") {
      goBack({ skipQueryUpdate: true });
    }
  },
);
</script>

<template>
  <div
    class="w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <Transition name="fade" mode="out-in">
        <div v-if="view === 'list'" key="list">
          <div class="mb-12">
            <div class="text-catppuccin-subtle text-sm mb-2">
              ~$ cd ~/projects
            </div>
            <div class="flex items-center gap-4 text-sm mb-6">
              <router-link
                to="/"
                class="text-catppuccin-subtle hover:text-catppuccin-text transition-colors"
              >
                [← home]
              </router-link>
            </div>
            <h1
              class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"
            >
              <span class="text-catppuccin-mauve">Projects</span>
            </h1>
            <p class="text-sm text-catppuccin-gray leading-relaxed mb-6">
              A collection of projects I've worked on, ranging from web
              applications to plugins and tools.
            </p>

            <TagFilter
              :tags="tags"
              :selected-tag="selectedTag"
              @toggle-tag="toggleTag"
            />
          </div>

          <ProjectList
            :projects="filteredProjects"
            :selected-tag="selectedTag"
            @open-project="openProject"
            @select-tag="toggleTag"
          />
          <Footer />
        </div>

        <div v-else-if="view === 'project' && currentProject" key="project">
          <ProjectComponent :project="currentProject" @go-back="goBack" />
          <Footer />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.2s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
