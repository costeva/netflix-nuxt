<template>
  <Spinner v-show="loading">
    <div>
      <div class="text-white min-h-screen">
        <section
          class="relative h-[70vh] bg-cover bg-center sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
          :style="{ backgroundImage: `url('/image/supercampeones.jpg')` }"
        >
          <div class="absolute inset-0 bg-dark bg-opacity-80"></div>
          <div
            class="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-4 sm:px-8 text-center sm:text-left"
          >
            <img
              src="@/assets/image/netflix-3.svg"
              alt="Netflix Logo"
              class="w-24 sm:w-32 mb-4"
            />
            <h1 class="text-2xl sm:text-4xl font-bold mb-4">Captain Tsubasa</h1>
            <p class="text-base sm:text-lg mb-6">
              Sigue las aventuras del joven futbolista con el sueño de
              convertirse en un campeón.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              <button
                class="px-4 py-2 bg-white text-black font-bold rounded w-full sm:w-auto"
              >
                Reproducir
              </button>
              <button
                class="px-4 py-2 bg-gray-700 text-white font-bold rounded w-full sm:w-auto"
              >
                Más información
              </button>
            </div>
          </div>
        </section>

        <Carrusel :carousels="carousels" :goToMovie="goToMovie" />
      </div>
    </div>
  </Spinner>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const carousels = ref([
  {
    title: "Solo en Netflix",
    searchTerm: "Action",
    movies: [],
  },
  {
    title: "Las series más populares",
    searchTerm: "Series",
    movies: [],
  },
]);
const { fetchMultiplePages, loading, goToMovie } = useMovies();

const loadCarousels = async () => {
  for (const carousel of carousels.value) {
    carousel.movies = await fetchMultiplePages(carousel.searchTerm, 2);
  }
};

onMounted(() => {
  loadCarousels();
});
</script>

<style scoped></style>
