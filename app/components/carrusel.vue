<template>
  <section class="px-4 py-8 sm:px-8 max-w-full overflow-hidden">
    <div v-for="(carousel, index) in carousels" :key="index" class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">{{ carousel.title }}</h2>
      <div class="flex overflow-x-auto scrollbar-hide">
        <div class="flex gap-x-4">
          <div
            v-for="(movie, i) in carousel.movies"
            :key="i"
            class="flex-none w-full sm:w-40 h-60 bg-cover bg-center rounded"
            :style="{ backgroundImage: `url('${movie.Poster}')` }"
            @click="goToMovie(movie.imdbID)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  carousels: {
    type: Array,
    required: true,
    default: () => [],
  },
  goToMovie: {
    type: Function,
    required: true,
  },
});
</script>
