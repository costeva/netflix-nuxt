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
      <img
        :src="movie.Poster !== 'N/A' ? movie?.Poster : '/no-image.png'"
        alt="Poster"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2"
      >
        <h3 class="text-sm font-semibold truncate">{{ movie?.Title }}</h3>
        <p class="text-xs">{{ movie?.Year }}</p>
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
