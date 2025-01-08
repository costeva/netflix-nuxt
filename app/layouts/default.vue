<template>
  <div class="min-h-screen flex flex-col">
    <div class="grid flex-grow lg:flex">
      <Sidebar />
      <main class="flex-1 p-8 overflow-auto">
        <slot />
      </main>
    </div>
    <Footer :links="footerLinks" copyright="© 2025 Netflix, Inc." />
  </div>
</template>

<script setup>
const footerLinks = [
  { text: "Audio descriptivo", href: "#" },
  { text: "Relaciones con inversionistas", href: "#" },
  { text: "Avisos legales", href: "#" },
  { text: "Centro de ayuda", href: "#" },
  { text: "Términos de uso", href: "#" },
  { text: "Privacidad", href: "#" },
  { text: "Contáctanos", href: "#" },
];
</script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
