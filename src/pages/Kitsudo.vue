<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ProjectComponent from "@/components/ProjectComponent.vue";
import Footer from "@/components/Footer.vue";
import ImageLightbox from "@/components/ImageLightbox.vue";
import { getProjectBySlug } from "@/services/projectService";

const router = useRouter();
const project = getProjectBySlug("kitsudo");

const phoneScreens = [
    { src: "/kitsudo/screenshots/home.jpg", label: "Today" },
    { src: "/kitsudo/screenshots/details.jpg", label: "Task details" },
    { src: "/kitsudo/screenshots/subtask.jpg", label: "Subtasks" },
    { src: "/kitsudo/screenshots/themes.jpg", label: "Themes" },
];

const wearScreens = [
    { src: "/kitsudo/screenshots/wear-home.png", label: "Task list" },
    { src: "/kitsudo/screenshots/wear-details.png", label: "Task details" },
    { src: "/kitsudo/screenshots/wear-widget.png", label: "Watch tile" },
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
        <div
            class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2"
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
                            The Android app keeps the task list compact while
                            leaving the details, subtasks, and appearance
                            settings close at hand.
                        </p>

                        <div
                            class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                        >
                            <figure
                                v-for="screen in phoneScreens"
                                :key="screen.src"
                            >
                                <button
                                    type="button"
                                    class="block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in"
                                    :aria-label="`Open ${screen.label} screenshot`"
                                    @click="
                                        openLightbox(
                                            screen.src,
                                            `Kitsudo ${screen.label} screen`,
                                        )
                                    "
                                >
                                    <img
                                        :src="screen.src"
                                        :alt="`Kitsudo ${screen.label} screen`"
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
                        class="section-sidebar mb-10"
                        aria-labelledby="wear-os-companion"
                    >
                        <h2
                            id="wear-os-companion"
                            class="group text-xl font-semibold text-catppuccin-mauve mb-4"
                        >
                            Wear OS companion<a
                                href="#wear-os-companion"
                                class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve"
                                aria-label="Link to Wear OS companion section"
                                >#</a
                            >
                        </h2>
                        <p class="text-catppuccin-text leading-relaxed mb-5">
                            Check today's tasks, complete them, and open task
                            details from your wrist. Phone and watch sync
                            directly without an account.
                        </p>

                        <div
                            class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                        >
                            <figure
                                v-for="screen in wearScreens"
                                :key="screen.src"
                            >
                                <button
                                    type="button"
                                    class="block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in"
                                    :aria-label="`Open Wear OS ${screen.label} screenshot`"
                                    @click="
                                        openLightbox(
                                            screen.src,
                                            `Kitsudo Wear OS ${screen.label}`,
                                        )
                                    "
                                >
                                    <img
                                        :src="screen.src"
                                        :alt="`Kitsudo Wear OS ${screen.label}`"
                                        class="block w-full rounded-[28%]"
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
                        <div
                            class="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]"
                            role="img"
                            aria-label="Kitsudo app icon"
                        >
                            <svg
                                viewBox="0 0 100 100"
                                class="absolute inset-0 w-full h-full"
                                aria-hidden="true"
                            >
                                <defs>
                                    <filter
                                        id="kitsudoIconBevel"
                                        x="-20%"
                                        y="-20%"
                                        width="140%"
                                        height="140%"
                                    >
                                        <feOffset
                                            in="SourceAlpha"
                                            dx="0"
                                            dy="1.5"
                                            result="downA"
                                        />
                                        <feGaussianBlur
                                            in="downA"
                                            stdDeviation="0.8"
                                            result="downB"
                                        />
                                        <feComposite
                                            in="SourceAlpha"
                                            in2="downB"
                                            operator="out"
                                            result="topEdge"
                                        />
                                        <feFlood
                                            flood-color="#ffffff"
                                            flood-opacity="0.2"
                                        />
                                        <feComposite
                                            in2="topEdge"
                                            operator="in"
                                            result="topShine"
                                        />
                                        <feOffset
                                            in="SourceAlpha"
                                            dx="0"
                                            dy="-1.5"
                                            result="upA"
                                        />
                                        <feGaussianBlur
                                            in="upA"
                                            stdDeviation="1.2"
                                            result="upB"
                                        />
                                        <feComposite
                                            in="SourceAlpha"
                                            in2="upB"
                                            operator="out"
                                            result="bottomEdge"
                                        />
                                        <feFlood
                                            flood-color="#000000"
                                            flood-opacity="0.35"
                                        />
                                        <feComposite
                                            in2="bottomEdge"
                                            operator="in"
                                            result="bottomShade"
                                        />
                                        <feMerge>
                                            <feMergeNode in="SourceGraphic" />
                                            <feMergeNode in="topShine" />
                                            <feMergeNode in="bottomShade" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path
                                    d="M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z"
                                    fill="#24284b"
                                    filter="url(#kitsudoIconBevel)"
                                />
                            </svg>
                            <img
                                src="/kitsudo/logo.svg"
                                alt=""
                                class="absolute inset-[8%] w-auto h-auto object-contain"
                            />
                        </div>
                        <div class="flex-1 min-w-[180px]">
                            <div class="text-xs text-catppuccin-subtle mb-1">
                                ~$ wget kitsudo.apk
                            </div>
                            <h2
                                id="download-heading"
                                class="text-lg sm:text-xl font-bold text-catppuccin-text mb-1"
                            >
                                Ready when you are.
                            </h2>
                            <p class="text-xs sm:text-sm text-catppuccin-gray">
                                Free, open-source, and built without ads or
                                tracking.
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <a
                                href="https://play.google.com/store/apps/details?id=dev.heckr.kitsudo"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="download-primary"
                            >
                                [ Google Play ]
                            </a>
                            <a
                                href="https://github.com/hecker-01/Kitsudo/releases/latest"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="download-secondary"
                            >
                                [ Latest APK ]
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
