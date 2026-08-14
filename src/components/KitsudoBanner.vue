<template>
    <aside
        aria-labelledby="kitsudo-announcement"
        class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
        <div class="announcement-card">
            <div
                class="app-icon relative h-12 w-12 shrink-0 sm:h-14 sm:w-14"
                role="img"
                aria-label="Kitsudo app icon"
            >
                <span
                    class="absolute inset-0 rounded-[36%] bg-[#24284b]"
                ></span>
                <img
                    src="/kitsudo/logo.svg"
                    alt=""
                    class="absolute inset-[8%] h-auto w-auto object-contain"
                />
            </div>

            <div class="min-w-[180px] flex-1">
                <h2
                    id="kitsudo-announcement"
                    class="mb-0.5 text-sm font-bold text-catppuccin-text sm:text-base"
                >
                    Kitsudo is now available on Google Play.
                </h2>
                <p class="hidden text-catppuccin-gray sm:block sm:text-xs">
                    Free, open-source, and built without ads or tracking.
                </p>
            </div>

            <div class="flex w-full gap-2 sm:w-auto">
                <router-link
                    to="/kitsudo"
                    class="announcement-button announcement-secondary flex-1 sm:flex-none"
                >
                    [ More info ]
                </router-link>
                <a
                    href="https://play.google.com/store/apps/details?id=dev.heckr.kitsudo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Kitsudo on Google Play (opens in a new tab)"
                    class="announcement-button announcement-primary flex-1 sm:flex-none"
                >
                    [ Google Play ]
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
    border-radius: 0 0 0.5rem 0.5rem;
    background: linear-gradient(
        110deg,
        rgba(203, 166, 247, 0.07),
        rgba(30, 30, 46, 0.3)
    );
}

.app-icon {
    filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.35));
}

.app-icon > span {
    box-shadow:
        inset 0 1px 1px rgba(255, 255, 255, 0.2),
        inset 0 -2px 2px rgba(0, 0, 0, 0.35);
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
