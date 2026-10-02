<script setup>
defineProps({
    languages: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const languageReposUrl = (language) => {
    const params = new URLSearchParams({
        tab: "repositories",
        q: "",
        type: "",
        language: language.toLowerCase(),
        sort: "stargazers",
    });

    return `https://github.com/hecker-01?${params.toString()}`;
};
</script>

<template>
    <div class="border-l-2 border-catppuccin-surface pl-4 mb-4">
        <div class="text-catppuccin-subtle text-sm mb-2">~$ ls ~/tools</div>
        <div
            v-if="loading"
            class="text-sm text-catppuccin-subtle"
            role="status"
        >
            loading languages...
        </div>
        <ul
            v-else-if="languages.length"
            class="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3 lg:grid-cols-4"
            aria-label="Repositories by programming language"
        >
            <li
                v-for="lang in languages"
                :key="lang.language"
                class="min-w-0"
            >
                <a
                    :href="languageReposUrl(lang.language)"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`View ${lang.count} ${lang.language} ${lang.count === 1 ? 'repository' : 'repositories'} on GitHub`"
                    class="flex min-w-0 items-baseline gap-2 text-catppuccin-text transition-colors hover:text-catppuccin-mauve"
                >
                    <span class="truncate">{{ lang.language }}</span>
                    <span class="flex-shrink-0 text-catppuccin-subtle tabular-nums">
                        ({{ lang.count }})
                    </span>
                </a>
            </li>
        </ul>
        <div v-else class="text-sm text-catppuccin-subtle" role="status">
            no languages found
        </div>
    </div>
</template>
