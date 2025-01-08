<template>
  <div
    class="md:hidden flex overflow-x-auto gap-x-4 py-6 scrollbar-hide snap-x snap-mandatory"
  >
    <div
      v-for="movie in movies"
      :key="movie?.imdbID"
      class="flex-none w-full h-[300px] bg-cover bg-center rounded snap-start shadow-md hover:shadow-lg transition-shadow duration-300"
      @click="goToMovie(movie.imdbID)"
    >
      <div class="relative w-full h-72">
        <img
          :src="movie.Poster !== 'N/A' ? movie?.Poster : '/no-image.png'"
          alt="Poster"
          class="w-full h-full object-cover"
          loading="lazy"
        />

        <div
          class="absolute top-2 right-2 bg-gray-900 bg-opacity-90 text-white text-sm px-2 py-1 rounded shadow-md"
        >
          {{ movie?.Year }}
        </div>
      </div>

      <div class="p-4">
        <h3
          class="text-lg font-semibold text-white truncate whitespace-normal break-words"
          title="movie?.Title"
        >
          {{ movie?.Title }}
        </h3>
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
