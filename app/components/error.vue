<template>
  <div
    class="mt-4 p-4 bg-red-100 border border-red-300 rounded-md text-red-700 flex items-center"
  >
    <Icon name="heroicons-outline:exclamation-circle" class="w-6 h-6 mr-2" />
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
