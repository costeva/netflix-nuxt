<template>
  <div class="mt-6 flex justify-center items-center space-x-4">
    <button
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
      aria-label="Página anterior"
      @click="prevPage"
    >
      Anterior
    </button>
    <span class="text-gray-700">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
      aria-label="Página siguiente"
      @click="nextPage"
    >
      Siguiente
    </button>
  </div>
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
