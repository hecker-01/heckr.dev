<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { getLinks } from "@/services/linksService";
import NeofetchStatus from "@/components/NeofetchStatus.vue";

const links = getLinks();
const aliases = [
    {
        name: "hecker-01",
        descriptionBefore: "My GitHub username is ",
        descriptionAfter: ".",
        href: "https://github.com/hecker-01",
        linkLabel: "@hecker-01",
    },
    {
        name: "BitzenTheFox",
        descriptionBefore: "My fursona name is ",
        descriptionAfter: ".",
        href: "https://goober.zip",
        linkLabel: "BitzenTheFox",
    },
];
const aliasIndex = ref(0);
const aliasHovered = ref(false);
const aliasFocused = ref(false);
let aliasTimer;

function startAliasTimer() {
    if (aliasTimer !== undefined || aliasHovered.value || aliasFocused.value) {
        return;
    }

    aliasTimer = window.setInterval(() => {
        aliasIndex.value = (aliasIndex.value + 1) % aliases.length;
    }, 2800);
}

function pauseAliasRotation() {
    window.clearInterval(aliasTimer);
    aliasTimer = undefined;
}

function resumeAliasRotation() {
    if (!aliasHovered.value && !aliasFocused.value) {
        startAliasTimer();
    }
}

function cycleAlias() {
    aliasIndex.value = (aliasIndex.value + 1) % aliases.length;
}

function handleAliasMouseEnter() {
    aliasHovered.value = true;
    pauseAliasRotation();
}

function handleAliasMouseLeave() {
    aliasHovered.value = false;
    resumeAliasRotation();
}

function handleAliasFocusIn() {
    aliasFocused.value = true;
    pauseAliasRotation();
}

function handleAliasFocusOut(event) {
    if (event.currentTarget.contains(event.relatedTarget)) {
        return;
    }

    aliasFocused.value = false;
    resumeAliasRotation();
}

onMounted(startAliasTimer);

onUnmounted(() => {
    window.clearInterval(aliasTimer);
});
</script>

<template>
    <div class="mb-6">
        <div class="mb-6">
            <div class="text-catppuccin-subtle text-sm mb-2">~$ whoami</div>
            <h1
                class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2"
            >
                <span class="text-catppuccin-mauve">jesse</span>
                <span class="text-catppuccin-subtle">@</span>
                <span class="text-catppuccin-blue">heckr.dev</span>
            </h1>
            <div class="text-sm text-catppuccin-gray 6">
                <span class="text-catppuccin-subtle">aka </span
                ><span
                    class="relative inline-flex"
                    @mouseenter="handleAliasMouseEnter"
                    @mouseleave="handleAliasMouseLeave"
                    @focusin="handleAliasFocusIn"
                    @focusout="handleAliasFocusOut"
                >
                    <button
                        type="button"
                        class="cursor-pointer appearance-none border-0 bg-transparent p-0 rounded-sm text-catppuccin-green focus-visible:outline focus-visible:outline-1 focus-visible:outline-catppuccin-green focus-visible:outline-offset-2"
                        @click="cycleAlias"
                        :aria-expanded="aliasHovered || aliasFocused"
                        aria-controls="alias-source-popover"
                    >
                        <Transition name="alias-fade" mode="out-in">
                            <span :key="aliasIndex">{{
                                aliases[aliasIndex].name
                            }}</span>
                        </Transition>
                    </button>
                    <Transition name="alias-tooltip-fade">
                        <span
                            v-if="aliasHovered || aliasFocused"
                            id="alias-source-popover"
                            role="group"
                            :aria-label="`Source information for ${aliases[aliasIndex].name}`"
                            class="alias-tooltip absolute top-full z-20 -mt-0.5"
                        >
                            <span>{{
                                aliases[aliasIndex].descriptionBefore
                            }}</span>
                            <a
                                :href="aliases[aliasIndex].href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="alias-tooltip-link"
                                >{{ aliases[aliasIndex].linkLabel
                                }}<span class="sr-only">
                                    (opens in a new tab)
                                </span></a
                            ><span>{{
                                aliases[aliasIndex].descriptionAfter
                            }}</span>
                        </span>
                    </Transition>
                </span>
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
            <div class="text-catppuccin-subtle text-sm mb-2">
                ~$ cat about.txt
            </div>
            <p class="text-catppuccin-text leading-relaxed mb-4">
                Hi! I'm Jesse, a Dutch Software Development Student at Grafisch
                Lyceum Rotterdam. <br />
                I code all sorts of tools and applications mainly for my own
                use, I also code plugins for Minecraft and Discord bots, my main
                goal is to have fun while doing so! <br />
                My passion is Frontend development, but I also enjoy working on
                backend and mobile projects. <br />
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

.alias-fade-enter-active,
.alias-fade-leave-active {
    transition: opacity 180ms ease;
}

.alias-fade-enter-from,
.alias-fade-leave-to {
    opacity: 0;
}

.alias-tooltip-fade-enter-active,
.alias-tooltip-fade-leave-active {
    transition:
        opacity 120ms ease,
        translate 120ms ease;
}

.alias-tooltip {
    left: 50%;
    width: max-content;
    max-width: calc(100vw - 2rem);
    transform: translateX(-50%);
    translate: 0 0;
    border-radius: 0.25rem;
    background: var(--catppuccin-surface, #313244);
    color: var(--catppuccin-subtle, #a6adc8);
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    line-height: 1.25;
    text-align: center;
}

.alias-tooltip-link {
    color: var(--catppuccin-mauve, #cba6f7);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.alias-tooltip-link:hover {
    color: var(--catppuccin-pink, #f5c2e7);
}

.alias-tooltip-link:focus-visible {
    border-radius: 0.125rem;
    outline: 1px solid var(--catppuccin-mauve, #cba6f7);
    outline-offset: 2px;
}

@media (max-width: 480px) {
    .alias-tooltip {
        left: 0;
        transform: none;
        text-align: left;
    }
}

.alias-tooltip-fade-enter-from,
.alias-tooltip-fade-leave-to {
    opacity: 0;
    translate: 0 -0.25rem;
}

@media (prefers-reduced-motion: reduce) {
    .alias-fade-enter-active,
    .alias-fade-leave-active,
    .alias-tooltip-fade-enter-active,
    .alias-tooltip-fade-leave-active {
        transition: none;
    }
}
</style>
