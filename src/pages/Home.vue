<script setup>
import { ref, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import LanguagesList from "@/components/LanguagesList.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ShowcaseCarousel from "@/components/ShowcaseCarousel.vue";
import ContributionGraph from "@/components/ContributionGraph.vue";
import { getAllReposWithLanguages } from "@/services/githubService";

const repos = ref([]);
const reposLoading = ref(true);
const languages = ref([]);

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
});
</script>

<template>
  <div class="w-full min-h-screen overflow-x-hidden font-mono">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <HeroSection />

      <LanguagesList :languages="languages" :loading="reposLoading" />

      <div class="grid lg:grid-cols-2 gap-6 lg:items-stretch mb-8">
        <ProjectsList :repos="repos" :loading="reposLoading" />
        <ShowcaseCarousel />
      </div>

      <ContributionGraph />
    </div>
  </div>
</template>

<style scoped></style>
