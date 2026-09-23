<script setup>
import { ref, onMounted } from "vue";
import KitsudoBanner from "@/components/KitsudoBanner.vue";
import HeroSection from "@/components/HeroSection.vue";
import LanguagesList from "@/components/LanguagesList.vue";
import ShowcaseCarousel from "@/components/ShowcaseCarousel.vue";
import ContributionGraph from "@/components/ContributionGraph.vue";
import Footer from "@/components/Footer.vue";
import { getAllReposWithLanguages } from "@/services/githubService";
import ReposList from "@/components/ReposList.vue";

const repos = ref([]);
const reposLoading = ref(true);
const reposError = ref(null);
const languages = ref([]);

const fetchProjects = async () => {
    try {
        reposLoading.value = true;
        reposError.value = null;
        const {
            repos: repoData,
            languages: langData,
            error,
        } = await getAllReposWithLanguages();
        repos.value = repoData;
        languages.value = langData;
        reposError.value = error;
    } catch (error) {
        reposError.value =
            error instanceof Error
                ? error.message
                : "GitHub data is temporarily unavailable.";
    } finally {
        reposLoading.value = false;
    }
};

onMounted(() => {
    fetchProjects();
});
</script>

<template>
    <div
        class="w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"
    >
        <!-- <KitsudoBanner /> -->

        <div
            class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-10 md:pb-2"
        >
            <HeroSection />

            <LanguagesList
                :languages="languages"
                :loading="reposLoading"
                id="languages"
            />

            <div
                v-if="reposError"
                role="status"
                class="mb-4 flex flex-wrap items-center gap-3 text-sm text-catppuccin-yellow"
            >
                <span>{{ reposError }}</span>
                <button
                    type="button"
                    class="underline hover:text-catppuccin-text"
                    @click="fetchProjects"
                >
                    retry
                </button>
            </div>

            <div class="grid lg:grid-cols-2 gap-6 lg:items-stretch">
                <ReposList :repos="repos" :loading="reposLoading" />
                <ShowcaseCarousel />
            </div>

            <ContributionGraph />
            <Footer />
        </div>
    </div>
</template>

<style scoped></style>
