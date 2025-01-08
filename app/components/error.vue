<template>
  <div
    class="mt-4 p-4 bg-red-100 border border-red-300 rounded-md text-red-700 flex items-center"
  >
    <svg
      class="w-6 h-6 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 9v3m0 4h.01"
      ></path>
    </svg>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
    default: "Ocurrió un error inesperado.",
  },
});
</script>
