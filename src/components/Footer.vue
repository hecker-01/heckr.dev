<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer
        class="w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"
    >
        <p class="mb-2">
            Jesse, also known online as HeckerDev
            (<a
                href="https://heckerdev.net"
                rel="me"
                class="underline hover:text-catppuccin-text"
                >heckerdev.net</a
            >) and hecker-01.
        </p>
        <p>© 2020 - {{ currentYear }} heckr.dev | All rights reserved.</p>
    </footer>
</template>
