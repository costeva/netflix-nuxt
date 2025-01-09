<template>
  <footer class="bg-dark text-gray-400 text-sm py-8 flex justify-center">
    <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
      <nav aria-label="Navegación del Footer">
        <ul class="flex flex-wrap justify-center sm:justify-start gap-4 mb-4">
          <li v-for="(link, index) in links" :key="index">
            <a
              :href="link.href"
              class="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>

      <p class="text-center">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
    default: () => [],
  },
  copyright: {
    type: String,
    required: true,
    default: "© 2025 Netflix, Inc.",
  },
});
</script>
