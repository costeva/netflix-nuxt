<template>
  <nav class="mt-6" aria-label="Paginación">
    <div class="flex justify-center items-center space-x-4">
      <button
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Página anterior"
        @click="prevPage"
      >
        Anterior
      </button>

      <span class="text-gray-700" aria-live="polite">
        Página {{ currentPage }} de {{ totalPages }}
      </span>

      <button
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Página siguiente"
        @click="nextPage"
      >
        Siguiente
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  prevPage: {
    type: Function,
    required: true,
  },
  nextPage: {
    type: Function,
    required: true,
  },
});
</script>
<style scoped>
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
