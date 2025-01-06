<template>
  <div class="text-white min-h-screen">
    <!-- Banner -->
    <section
      class="relative h-[70vh] bg-cover bg-center"
      :style="{ backgroundImage: `url('/image/supercampeones.jpg')` }"
    >
      <div class="absolute inset-0 bg-dark bg-opacity-80"></div>
      <div
        class="relative z-10 flex flex-col items-start justify-center h-full px-8"
      >
        <img
          src="@/assets/image/netflix-3.svg"
          alt="Netflix Logo"
          class="w-32 mb-4"
        />
        <h1 class="text-4xl font-bold mb-4">Captain Tsubasa</h1>
        <p class="text-lg mb-6">
          Sigue las aventuras del joven futbolista con el sueño de convertirse
          en un campeón.
        </p>
        <div class="flex space-x-4">
          <button class="px-4 py-2 bg-white text-black font-bold rounded">
            Reproducir
          </button>
          <button class="px-4 py-2 bg-gray-700 text-white font-bold rounded">
            Más información
          </button>
        </div>
      </div>
    </section>

    <!-- Carruseles -->
    <section class="px-8 py-8">
      <div v-for="(carousel, index) in carousels" :key="index" class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ carousel.title }}</h2>
        <div class="flex overflow-x-scroll space-x-4">
          <div
            v-for="(movie, i) in carousel.movies"
            :key="i"
            class="flex-none w-40 h-60 bg-cover bg-center rounded"
            :style="{ backgroundImage: `url('${movie.image}')` }"
          ></div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-gray-400 text-sm py-8">
      <div class="max-w-screen-lg mx-auto px-8">
        <ul class="flex flex-wrap space-x-4 mb-4">
          <li><a href="#" class="hover:underline">Audio descriptivo</a></li>
          <li>
            <a href="#" class="hover:underline"
              >Relaciones con inversionistas</a
            >
          </li>
          <li><a href="#" class="hover:underline">Avisos legales</a></li>
          <li><a href="#" class="hover:underline">Centro de ayuda</a></li>
          <li><a href="#" class="hover:underline">Términos de uso</a></li>
          <li><a href="#" class="hover:underline">Privacidad</a></li>
          <li><a href="#" class="hover:underline">Contáctanos</a></li>
        </ul>
        <p class="text-center">&copy; 2025 Netflix, Inc.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const carousels = ref([
  {
    title: "Solo en Netflix",
    movies: [
      { image: "/image/movie1.jpg" },
      { image: "/image/movie2.jpg" },
      { image: "/image/movie3.jpg" },
    ],
  },
  {
    title: "Las 10 series más populares",
    movies: [
      { image: "/image/series1.jpg" },
      { image: "/image/series2.jpg" },
      { image: "/image/series3.jpg" },
    ],
  },
]);
</script>

<style scoped>
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
