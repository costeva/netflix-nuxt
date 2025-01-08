<template>
  <div class="max-w-7xl mx-auto p-4">
    <InputSearch v-model="searchQuery" />
    <Spinner v-if="loading" />
    <Error v-if="error" :message="'No se encontraron resultados'" />
    <GridMovies
      v-if="results.length"
      :movies="results"
      :go-to-movie="goToMovie"
    />
    <MobileCarrusel
      v-if="results.length"
      :movies="results"
      :go-to-movie="goToMovie"
    />
    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      :prev-page="prevPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script setup>
const {
  searchQuery,
  results,
  loading,
  error,
  currentPage,
  totalPages,
  handleInput,
  nextPage,
  prevPage,
  goToMovie,
} = useSearchMovies();

watch(searchQuery, handleInput);
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
