<template>
  <div
    class="md:hidden flex items-center justify-start h-full overflow-x-auto gap-x-4 scrollbar-hide snap-x snap-mandatory py-4"
  >
    <button
      v-for="movie in movies"
      :key="movie?.imdbID"
      class="relative flex-none w-64 bg-cover bg-center rounded cursor-pointer snap-start focus:outline-none focus:ring-2 focus:ring-red-500"
      :aria-label="`Ver detalles de ${movie.Title}`"
      @click="goToMovie(movie.imdbID)"
    >
      <div class="relative w-full h-96">
        <img
          :src="movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'"
          :alt="
            movie.Poster !== 'N/A'
              ? `Poster de ${movie.Title}`
              : `No hay imagen disponible para ${movie.Title}`
          "
          class="w-full h-full object-cover rounded"
          loading="lazy"
        />

        <div
          class="absolute top-2 right-2 bg-gray-900 bg-opacity-90 text-white text-sm px-2 py-1 rounded shadow-md"
          aria-hidden="true"
        >
          {{ movie.Year }}
        </div>
      </div>

      <div class="p-2">
        <h3
          class="text-lg font-semibold text-white truncate whitespace-normal break-words"
          :title="movie.Title"
        >
          {{ movie.Title }}
        </h3>
      </div>
    </button>
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
