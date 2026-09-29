<script setup>
import { ref, computed, onMounted } from "vue";
import {
    getContributionData,
    getContributionLevel,
    getGitHubContributionUrl,
    getRecentCommits,
} from "@/services/githubService";

const contributions = ref([]);
const contributionsLoading = ref(true);
const contributionsError = ref(null);
const commitGraphExpanded = ref(false);
const commits = ref([]);
const commitsLoading = ref(false);
const commitsError = ref(null);
const commitsLoaded = ref(false);
const weekdays = ["", "Mon", "", "Wed", "", "Fri", ""];

const commitGraphRows = computed(() =>
    commits.value.map((commit, index) => {
        const nextCommit = commits.value[index + 1];
        const previousCommit = commits.value[index - 1];
        const connectsToNext = Boolean(
            nextCommit && commit.parents.includes(nextCommit.sha),
        );

        return {
            commit,
            connectsFromPrevious: Boolean(
                previousCommit && previousCommit.parents.includes(commit.sha),
            ),
            connectsToNext,
            otherParents: commit.parents.filter(
                (parentSha) => !connectsToNext || parentSha !== nextCommit.sha,
            ),
        };
    }),
);

const commitUrl = (sha) =>
    `https://github.com/hecker-01/heckr.dev/commit/${sha}`;

const fetchCommitGraph = async () => {
    if (commitsLoading.value) return;
    commitsLoading.value = true;
    commitsError.value = null;

    try {
        const result = await getRecentCommits();
        commits.value = result.commits;
        commitsError.value = result.error;
        commitsLoaded.value = !result.error;
    } catch {
        commitsError.value = "Git history is temporarily unavailable.";
    } finally {
        commitsLoading.value = false;
    }
};

const toggleCommitGraph = () => {
    commitGraphExpanded.value = !commitGraphExpanded.value;
    if (commitGraphExpanded.value && !commitsLoaded.value) {
        void fetchCommitGraph();
    }
};

const todayDate = (() => {
    const today = new Date();
    return [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");
})();

const contributionWeeks = computed(() => {
    const weeks = [];
    for (let i = 0; i < contributions.value.length; i += 7) {
        weeks.push(
            contributions.value
                .slice(i, i + 7)
                .filter((day) => day.date <= todayDate),
        );
    }
    return weeks;
});

const totalContributions = computed(() => {
    return contributions.value.reduce((sum, day) => sum + day.count, 0);
});

const monthLabels = computed(() => {
    if (!contributions.value.length) return [];

    const months = {};
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let lastMonth = -1;

    contributionWeeks.value.forEach((week, weekIndex) => {
        const firstDay = week[0];
        if (firstDay) {
            const month = Number(firstDay.date.slice(5, 7)) - 1;
            if (month !== lastMonth) {
                if (weekIndex > 0 || firstDay.date.slice(8, 10) === "01") {
                    months[weekIndex] = monthNames[month];
                }
                lastMonth = month;
            }
        }
    });

    return months;
});

const fetchContributions = async () => {
    contributionsLoading.value = true;
    contributionsError.value = null;
    try {
        const result = await getContributionData();
        contributions.value = result.contributions;
        contributionsError.value = result.error;
    } catch {
        contributionsError.value = "Contribution data is temporarily unavailable.";
    } finally {
        contributionsLoading.value = false;
    }
};

onMounted(() => {
    fetchContributions();
});
</script>

<template>
    <div class="mt-6 border-l-2 border-catppuccin-surface pl-4">
        <div class="mb-3">
            <button
                type="button"
                class="text-left text-catppuccin-subtle text-sm hover:text-catppuccin-text transition-colors"
                :aria-expanded="commitGraphExpanded"
                aria-controls="recent-commit-tree"
                @click="toggleCommitGraph"
            >
                ~$ git log --oneline --since="1.year.ago" | wc -l
            </button>
        </div>
        <section
            id="recent-commit-tree"
            v-show="commitGraphExpanded"
            class="mb-4"
            aria-label="Recent Git commits"
            :aria-busy="commitsLoading"
        >
            <div
                v-if="commitsLoading && !commits.length"
                class="text-sm text-catppuccin-subtle"
                role="status"
            >
                ~$ fetching commit history...
            </div>
            <div
                v-if="commitsError"
                class="mb-2 text-sm text-catppuccin-yellow"
                role="status"
            >
                <span>{{ commitsError }}</span>
                <button
                    type="button"
                    class="ml-3 underline hover:text-catppuccin-text"
                    :disabled="commitsLoading"
                    @click="fetchCommitGraph"
                >
                    retry
                </button>
            </div>
            <div
                v-if="commitGraphRows.length"
                class="max-w-full overflow-hidden rounded-lg border border-catppuccin-surface/70 bg-catppuccin-crust/50"
            >
                <div
                    class="flex items-center justify-between gap-3 border-b border-catppuccin-surface/60 px-3 py-2 text-[11px]"
                >
                    <span class="min-w-0 truncate">
                        <span
                            class="rounded border border-catppuccin-green/30 bg-catppuccin-green/10 px-1.5 py-0.5 text-catppuccin-green"
                            >HEAD</span
                        >
                        <span class="ml-2 text-catppuccin-text">recent history</span>
                    </span>
                    <span class="flex-shrink-0 text-catppuccin-subtle">
                        {{ commits.length }} commits
                    </span>
                </div>
                <ol class="py-1 font-mono text-xs">
                    <li
                        v-for="(row, index) in commitGraphRows"
                        :key="row.commit.sha"
                        class="group relative flex min-h-8 items-center px-3 transition-colors hover:bg-catppuccin-surface/30"
                    >
                        <span
                            class="relative mr-3 flex h-8 w-3 flex-shrink-0 items-center justify-center"
                            aria-hidden="true"
                        >
                            <span
                                v-if="row.connectsFromPrevious"
                                class="absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-1/2 bg-catppuccin-subtle/60"
                            ></span>
                            <span
                                v-if="row.connectsToNext"
                                class="absolute bottom-0 left-1/2 h-1/2 w-0.5 -translate-x-1/2 bg-catppuccin-subtle/60"
                            ></span>
                            <span
                                class="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-catppuccin-green transition-colors"
                                :class="index === 0 ? 'bg-catppuccin-green' : 'bg-catppuccin-crust group-hover:bg-catppuccin-green'"
                            ></span>
                        </span>
                        <a
                            :href="row.commit.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            :title="`${row.commit.sha.slice(0, 7)} ${row.commit.message}`"
                            class="flex min-w-0 flex-1 items-center gap-3 leading-5"
                        >
                            <span class="flex-shrink-0 text-catppuccin-mauve">
                                {{ row.commit.sha.slice(0, 7) }}
                            </span>
                            <span
                                class="min-w-0 truncate text-catppuccin-text transition-colors group-hover:text-catppuccin-mauve"
                            >
                                {{ row.commit.message }}
                            </span>
                        </a>
                    </li>
                    <li
                        v-for="row in commitGraphRows.filter(({ otherParents }) => otherParents.length)"
                        :key="`${row.commit.sha}-parents`"
                        class="flex min-h-7 items-center gap-3 px-3 pl-6 font-mono text-[11px]"
                    >
                        <span class="text-catppuccin-overlay" aria-hidden="true">└─</span>
                        <a
                            v-for="parentSha in row.otherParents"
                            :key="parentSha"
                            :href="commitUrl(parentSha)"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-catppuccin-subtle transition-colors hover:text-catppuccin-mauve"
                        >
                            {{ parentSha.slice(0, 7) }} parent of {{ row.commit.sha.slice(0, 7) }}
                        </a>
                    </li>
                </ol>
            </div>
            <div
                v-else-if="!commitsLoading && !commitsError"
                class="text-sm text-catppuccin-subtle"
                role="status"
            >
                No recent commits found.
            </div>
        </section>
        <div v-if="contributionsLoading">
            <div
                class="h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"
            ></div>
        </div>
        <div v-else-if="contributionsError" role="status" class="text-sm text-catppuccin-yellow">
            <span>{{ contributionsError }}</span>
            <button
                type="button"
                class="ml-3 underline hover:text-catppuccin-text"
                @click="fetchContributions"
            >
                retry
            </button>
            <span v-if="contributions.length" class="block mt-1 text-catppuccin-subtle">
                showing the last saved data
            </span>
        </div>
        <div v-else>
            <div class="max-w-full overflow-x-auto pb-2 scrollbar-thin">
                <div
                    class="grid w-full gap-[3px]"
                    :style="{
                        minWidth: `${32 + contributionWeeks.length * 13}px`,
                        gridTemplateColumns: `32px repeat(${contributionWeeks.length}, minmax(10px, 1fr))`,
                    }"
                >
                    <span
                        v-for="(week, weekIndex) in contributionWeeks"
                        v-show="monthLabels[weekIndex]"
                        :key="`month-${weekIndex}`"
                        class="whitespace-nowrap text-[12px] leading-4 text-catppuccin-subtle"
                        :style="{ gridColumn: weekIndex + 2, gridRow: 1 }"
                    >
                        {{ monthLabels[weekIndex] }}
                    </span>
                    <span
                        v-for="(weekday, dayIndex) in weekdays"
                        :key="`weekday-${dayIndex}`"
                        class="self-center text-[12px] leading-[10px] text-catppuccin-subtle"
                        :style="{ gridColumn: 1, gridRow: dayIndex + 2 }"
                    >
                        {{ weekday }}
                    </span>
                    <template v-for="(week, weekIndex) in contributionWeeks" :key="weekIndex">
                        <template v-for="(day, dayIndex) in week" :key="day.date">
                            <a
                                v-if="day.count > 0"
                                :href="getGitHubContributionUrl(day.date)"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="aspect-square min-w-[10px] w-full rounded-[20%] transition-shadow duration-150 ease-out hover:ring-1 hover:ring-catppuccin-green cursor-pointer"
                                :class="[
                                    getContributionLevel(day.count) === 1
                                        ? 'bg-catppuccin-green/30'
                                        : getContributionLevel(day.count) === 2
                                          ? 'bg-catppuccin-green/50'
                                          : getContributionLevel(day.count) === 3
                                            ? 'bg-catppuccin-green/70'
                                            : 'bg-catppuccin-green',
                                ]"
                                :style="{ gridColumn: weekIndex + 2, gridRow: dayIndex + 2 }"
                                :title="`${day.date}: ${day.count} contributions - Click to view on GitHub`"
                            ></a>
                            <div
                                v-else
                                class="aspect-square min-w-[10px] w-full rounded-[20%] bg-catppuccin-surface/50"
                                :style="{ gridColumn: weekIndex + 2, gridRow: dayIndex + 2 }"
                                :title="`${day.date}: ${day.count} contributions`"
                            ></div>
                        </template>
                    </template>
                </div>
            </div>
            <div
                class="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-catppuccin-subtle"
            >
                <span class="text-catppuccin-gray">
                    {{ totalContributions }} contributions in the last year
                </span>
                <div
                    class="flex items-center gap-1 whitespace-nowrap"
                >
                    <span>Less</span>
                    <div class="flex gap-[1px]">
                        <div
                            class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"
                        ></div>
                        <div
                            class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"
                        ></div>
                        <div
                            class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"
                        ></div>
                        <div
                            class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"
                        ></div>
                        <div
                            class="w-2 h-2 rounded-[2px] bg-catppuccin-green"
                        ></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    </div>
</template>
