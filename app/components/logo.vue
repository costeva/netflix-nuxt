<template>
  <div :class="`overflow-hidden rounded-lg ${size}`">
    <img :src="src" :alt="alt" class="object-contain w-full h-full" >
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
    default: "/default-logo.png",
  },
  alt: {
    type: String,
    required: false,
    default: "Logo",
  },
  size: {
    type: String,
    required: false,
    default: "w-[45px]",
  },
});
</script>
