<script setup>
// On the homepage the banner links to the project page instead of the stores.
defineProps({ moreInfo: Boolean });
</script>

<template>
    <aside
        aria-labelledby="look-studio-announcement"
        class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
        <div class="announcement-card">
            <img
                src="/img/look-studio/logo.svg"
                alt="Look Studio app icon"
                class="h-9 w-9 shrink-0 rounded-[24%] drop-shadow-[0_4px_2px_rgba(0,0,0,0.35)] sm:h-10 sm:w-10"
            />

            <div class="min-w-[180px] flex-1">
                <h2
                    id="look-studio-announcement"
                    class="mb-0.5 text-sm font-bold text-catppuccin-text sm:text-base"
                >
                    Look Studio is now available on BuiltByBit and Voxel.shop.
                </h2>
                <p class="hidden text-catppuccin-gray sm:block sm:text-xs">
                    Your panel, your look. A theme extension for Pterodactyl 2.0.
                </p>
            </div>

            <div v-if="moreInfo" class="flex w-full gap-2 sm:w-auto">
                <router-link
                    to="/projects/look-studio"
                    class="announcement-button announcement-primary flex-1 sm:flex-none"
                >
                    [ More info ]
                </router-link>
            </div>

            <div v-else class="flex w-full gap-2 sm:w-auto">
                <a
                    href="https://voxel.shop/product/10617/look-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Look Studio on Voxel.shop (opens in a new tab)"
                    class="announcement-button announcement-secondary flex-1 sm:flex-none"
                >
                    [ Voxel.shop ]
                </a>
                <a
                    href="https://builtbybit.com/resources/look-studio.138080/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Look Studio on BuiltByBit (opens in a new tab)"
                    class="announcement-button announcement-primary flex-1 sm:flex-none"
                >
                    [ BuiltByBit ]
                </a>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.announcement-card {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid rgba(203, 166, 247, 0.25);
    border-top: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    background: linear-gradient(
        110deg,
        rgba(203, 166, 247, 0.07),
        rgba(30, 30, 46, 0.3)
    );
}

.announcement-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    padding: 0.375rem 0.625rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.announcement-primary {
    border: 1px solid rgba(203, 166, 247, 0.6);
    background: rgba(203, 166, 247, 0.06);
    color: #cba6f7;
}

.announcement-primary:hover {
    color: #1e1e2e;
    background: #cba6f7;
}

.announcement-secondary {
    border: 1px solid rgba(49, 50, 68, 0.9);
    background: rgba(30, 30, 46, 0.2);
    color: #cdd6f4;
}

.announcement-secondary:hover {
    border-color: rgba(203, 166, 247, 0.45);
    background: rgba(49, 50, 68, 0.3);
    color: #cba6f7;
}
</style>
