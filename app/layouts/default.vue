<template>
  <div class="grid items-start lg:flex justify-between">
    <Sidebar />

    <main class="w-full p-8">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
