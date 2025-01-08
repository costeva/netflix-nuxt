<template>
  <div class="max-w-7xl mx-auto p-4">
    <InputSearch v-model="searchQuery" />
    <Spinner v-if="loading" />
    <Error v-if="error" :message="'No se encontraron resultados'" />
    <GridMovies
      v-if="results.length"
      :movies="results"
      :goToMovie="goToMovie"
    />
    <MobileCarrusel
      v-if="results.length"
      :movies="results"
      :goToMovie="goToMovie"
    />
    <Pagination
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :prevPage="prevPage"
      :nextPage="nextPage"
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
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
}
</style>
