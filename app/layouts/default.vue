<template>
  <div class="min-h-screen flex flex-col">
    <!-- Contenedor principal con grid y flex -->
    <div class="grid flex-grow lg:flex">
      <!-- Sidebar con ancho fijo -->
      <Sidebar />

      <!-- Main ajustado -->
      <main class="flex-1 p-8 overflow-auto">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup></script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
