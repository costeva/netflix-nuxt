<template>
  <div>
    <Spinner
      :loading="loading"
      :label="'Cargando...'"
      align="top"
      color="red-500"
    />
    <div v-if="!loading" class="text-white min-h-screen">
      <section
        class="relative h-[70vh] bg-cover bg-center sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        :style="{ backgroundImage: `url('/image/supercampeones.jpg')` }"
        role="region"
        aria-label="Banner de Captain Tsubasa"
      >
        <div
          class="absolute inset-0 bg-dark bg-opacity-80"
          aria-hidden="true"
        />
        <div
          class="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-4 sm:px-8 text-center sm:text-left"
        >
          <h1 class="text-3xl sm:text-5xl font-bold mb-4">
            <a href="/" aria-label="Netflix">
              <img
                src="@/assets/image/netflix-3.svg"
                alt="Logotipo de Netflix"
                class="w-24 sm:w-32 mb-4"
              />
              <span class="sr-only">Netflix</span>
            </a>
          </h1>
          <h2 class="text-2xl sm:text-4xl font-bold mb-4">Captain Tsubasa</h2>
          <p class="text-base sm:text-lg mb-6">
            Sigue las aventuras del joven futbolista con el sueño de convertirse
            en un campeón.
          </p>
          <div
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <button
              class="px-4 py-2 bg-white text-black font-bold rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Reproducir Captain Tsubasa"
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
      <ClientOnly>
        <Carrusel :carousels="carousels" :go-to-movie="goToMovie" />
      </ClientOnly>
    </div>
  </div>
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
    carousel.movies = await fetchMultiplePages(carousel.searchTerm, 1);
  }
};

onMounted(() => {
  loadCarousels();
});
</script>

<style scoped>
/* .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
} */
</style>
