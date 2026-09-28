<script setup>
import { ref, computed, onMounted } from "vue";
import {
    getContributionData,
    getContributionLevel,
    getGitHubContributionUrl,
} from "@/services/githubService";

const contributions = ref([]);
const contributionsLoading = ref(true);
const contributionsError = ref(null);
const weekdays = ["", "Mon", "", "Wed", "", "Fri", ""];

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
            <div class="text-catppuccin-subtle text-sm">
                ~$ git log --oneline --since="1.year.ago" | wc -l
            </div>
        </div>
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
