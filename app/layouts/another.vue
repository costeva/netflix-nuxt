<template>
  <div
    class="relative min-h-screen bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: `url('/image/login-background.jpg')` }"
  >
    <div class="absolute inset-0 bg-black opacity-60" />

    <div class="relative z-10 flex items-center justify-center min-h-screen">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Iniciar Sesión",
  meta: [
    {
      name: "description",
      content: "Pagina de inicio de sesión de Netflix",
    },
  ],
});
</script>
