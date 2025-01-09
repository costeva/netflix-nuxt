<template>
  <div class="px-4 py-8 max-w-full">
    <h1 class="text-4xl font-extrabold text-white mb-6">Buscar Películas</h1>
    <p class="sm:text-lg text-white mb-6">
      Encuentra tu película favorita ingresando su título o palabras clave.
    </p>
    <FormSearch />
  </div>
</template>

<script setup>
definePageMeta({
  title: "Buscar Películas - Netflix Clone",
  meta: [
    {
      name: "description",
      content:
        "Busca y encuentra información sobre tus películas favoritas usando nuestro buscador.",
    },
  ],
});
</script>
