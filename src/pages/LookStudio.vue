<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ProjectComponent from "@/components/ProjectComponent.vue";
import Footer from "@/components/Footer.vue";
import ImageLightbox from "@/components/ImageLightbox.vue";
import { getProjectBySlug } from "@/services/projectService";
import LookStudioBanner from "@/components/LookStudioBanner.vue";
import PageHead from "@/components/PageHead";
import { readingMinutes } from "@/services/headTags";

const router = useRouter();
const project = getProjectBySlug("look-studio");

const head = {
    title: project.title,
    description: project.description,
    path: "/projects/look-studio/",
    image: project.coverImage,
    type: "article",
    readingTime: readingMinutes(project.content),
};

const screens = [
    { src: "/img/look-studio/screenshots/dashboard.png", label: "Dashboard" },
    { src: "/img/look-studio/screenshots/editor.png", label: "Live editor" },
    { src: "/img/look-studio/screenshots/glass.png", label: "Glass look" },
    { src: "/img/look-studio/screenshots/light.png", label: "Light scheme" },
    { src: "/img/look-studio/screenshots/palette.png", label: "Command palette" },
    { src: "/img/look-studio/screenshots/console.png", label: "Arranged console" },
];

const goBack = () => router.push("/projects");

const lightboxSrc = ref(null);
const lightboxAlt = ref("");

const openLightbox = (src, alt) => {
    lightboxSrc.value = src;
    lightboxAlt.value = alt;
};

const closeLightbox = () => {
    lightboxSrc.value = null;
    lightboxAlt.value = "";
};
</script>

<template>
    <div
        class="w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"
    >
        <PageHead v-bind="head" />
        <LookStudioBanner />

        <div
            class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-6 md:pb-2"
        >

            <ProjectComponent
                :project="project"
                :sectioned="true"
                @go-back="goBack"
            >
                <div class="mb-8">
                    <section
                        class="section-sidebar mb-10"
                        aria-labelledby="screenshots"
                    >
                        <h2
                            id="screenshots"
                            class="group text-xl font-semibold text-catppuccin-mauve mb-4"
                        >
                            Screenshots<a
                                href="#screenshots"
                                class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve"
                                aria-label="Link to Screenshots section"
                                >#</a
                            >
                        </h2>
                        <p class="text-catppuccin-text leading-relaxed mb-5">
                            The dashboard, the live editor, two looks, the
                            command palette and a rearranged console page.
                        </p>

                        <div
                            class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                        >
                            <figure
                                v-for="screen in screens"
                                :key="screen.src"
                            >
                                <button
                                    type="button"
                                    class="block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in"
                                    :aria-label="`Open ${screen.label} screenshot`"
                                    @click="
                                        openLightbox(
                                            screen.src,
                                            `Look Studio ${screen.label}`,
                                        )
                                    "
                                >
                                    <img
                                        :src="screen.src"
                                        :alt="`Look Studio ${screen.label}`"
                                        class="block w-full rounded"
                                        loading="lazy"
                                    />
                                </button>
                                <figcaption
                                    class="mt-2 text-xs text-catppuccin-subtle"
                                >
                                    ./{{
                                        screen.label
                                            .toLowerCase()
                                            .replace(" ", "-")
                                    }}
                                </figcaption>
                            </figure>
                        </div>
                    </section>

                    <section
                        class="download-card"
                        aria-labelledby="download-heading"
                    >
                        <img
                            src="/img/look-studio/logo.svg"
                            alt="Look Studio app icon"
                            class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-[24%] drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]"
                        />
                        <div class="flex-1 min-w-[180px]">
                            <div class="text-xs text-catppuccin-subtle mb-1">
                                ~$ install look-studio
                            </div>
                            <h2
                                id="download-heading"
                                class="text-lg sm:text-xl font-bold text-catppuccin-text mb-1"
                            >
                                Get it now!
                            </h2>
                            <p class="text-xs sm:text-sm text-catppuccin-gray">
                                Install in under a minute and get updates
                                forever.
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <a
                                href="https://builtbybit.com/resources/look-studio.138080/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="download-primary"
                            >
                                [ BuiltByBit ]
                            </a>
                            <a
                                href="https://voxel.shop/product/10617/look-studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="download-secondary"
                            >
                                [ Voxel.shop ]
                            </a>
                        </div>
                    </section>
                </div>
            </ProjectComponent>

            <ImageLightbox
                :src="lightboxSrc"
                :alt="lightboxAlt"
                @close="closeLightbox"
            />

            <Footer />
        </div>
    </div>
</template>

<style scoped>
.download-card {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid rgba(203, 166, 247, 0.25);
    border-radius: 0.5rem;
    background: linear-gradient(
        110deg,
        rgba(203, 166, 247, 0.07),
        rgba(30, 30, 46, 0.3)
    );
}

.section-sidebar {
    padding-left: 0.5rem;
}

@media (min-width: 640px) {
    .section-sidebar {
        padding-left: 1rem;
        border-left: 2px solid #313244;
    }
}

.download-primary,
.download-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.2s ease;
}

.download-primary {
    color: #cba6f7;
    border: 1px solid rgba(203, 166, 247, 0.6);
    background: rgba(203, 166, 247, 0.06);
}

.download-primary:hover {
    color: #1e1e2e;
    background: #cba6f7;
}

.download-secondary {
    color: #cdd6f4;
    border: 1px solid rgba(49, 50, 68, 0.9);
    background: rgba(30, 30, 46, 0.2);
}

.download-secondary:hover {
    color: #cba6f7;
    border-color: rgba(203, 166, 247, 0.45);
    background: rgba(49, 50, 68, 0.3);
}
</style>
