<template>
  <div
    class="hidden md:grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-6"
  >
    <div
      v-for="movie in movies"
      :key="movie?.imdbID"
      class="relative bg-gray-800 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      role="button"
      :aria-label="`Ver detalles de ${movie.Title}`"
      @click="goToMovie(movie.imdbID)"
      @keydown.enter.prevent="goToMovie(movie.imdbID)"
      @keydown.space.prevent="goToMovie(movie.imdbID)"
    >
      <img
        :src="movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'"
        :alt="
          movie.Poster !== 'N/A'
            ? `Poster de ${movie.Title}`
            : `No hay imagen disponible para ${movie.Title}`
        "
        class="w-full h-[300px] object-cover"
        loading="lazy"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2"
      >
        <h3 class="text-sm font-semibold truncate">{{ movie.Title }}</h3>
        <p class="text-xs" aria-hidden="true">{{ movie.Year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movies: {
    type: Array,
    required: true,
  },
  goToMovie: {
    type: Function,
    required: true,
  },
});
</script>
