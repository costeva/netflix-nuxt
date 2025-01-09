<template>
  <section
    class="px-4 py-8 sm:px-8 max-w-full overflow-hidden relative"
    role="region"
    aria-labelledby="carousel-section-title"
  >
    <h2 id="carousel-section-title" class="sr-only">Carruseles de Contenido</h2>
    <div
      v-for="(carousel, index) in carousels"
      :key="index"
      class="mb-12 relative"
    >
      <h3 class="text-2xl font-semibold mb-4">{{ carousel.title }}</h3>
      <div class="flex items-center relative">
        <button
          class="absolute left-0 z-10 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Desplazar a la izquierda"
          @click="scrollLeft(index)"
        >
          <Icon name="mdi:arrow-left" class="w-6 h-6" />
        </button>

        <div
          ref="carouselRefs"
          class="flex-1 flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-4"
          :data-index="index"
          tabindex="0"
          aria-label="Carrusel de {{ carousel.title }}"
        >
          <div class="flex gap-x-4">
            <button
              v-for="(movie, i) in carousel.movies"
              :key="i"
              class="flex-none w-full sm:w-40 h-60 bg-cover bg-center rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              :style="{ backgroundImage: `url('${movie.Poster}')` }"
              aria-label="Ver detalles de {{ movie.Title }}"
              @click="goToMovie(movie.imdbID)"
            ></button>
          </div>
        </div>

        <button
          class="absolute right-0 z-10 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Desplazar a la derecha"
          @click="scrollRight(index)"
        >
          <Icon name="mdi:arrow-right" class="w-6 h-6" />
        </button>
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

const carouselRefs = ref([]);

carouselRefs.value = [];

const scrollLeft = (index) => {
  const carousel = carouselRefs.value[index];
  if (carousel) {
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth",
    });
  }
};

const scrollRight = (index) => {
  const carousel = carouselRefs.value[index];
  if (carousel) {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  }
};
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.relative {
  position: relative;
}
</style>
