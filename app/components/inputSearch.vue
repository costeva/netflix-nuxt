<template>
  <div class="relative">
    <label for="search-input" class="sr-only">Buscar películas</label>
    <input
      id="search-input"
      type="text"
      :value="modelValue"
      placeholder="Busca películas..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-describedby="search-input-description"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Icon
      name="mdi:magnify"
      class="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
      aria-hidden="true"
    />
  </div>
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(["update:modelValue"]);
</script>
