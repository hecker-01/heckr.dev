<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"
  >
    <p>© 2020 - {{ currentYear }} heckr.dev | All rights reserved.</p>
  </footer>
</template>
