<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div v-if="!loading" class="flex items-center justify-center h-screen">
      <p class="text-xl">Cargando...</p>
    </div>

    <div v-else class="container mx-auto px-4 py-6">
      <div class="relative">
        <img
          :src="movieDetails.value.Poster"
          :alt="movieDetails.value.Title"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1
          class="absolute bottom-4 left-4 text-3xl font-bold bg-black/70 px-3 py-1 rounded-md"
        >
          {{ movieDetails.value.Title }}
        </h1>
      </div>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p><strong>Año:</strong> {{ movieDetails.value.Year }}</p>
          <p><strong>Duración:</strong> {{ movieDetails.value.Runtime }}</p>
          <p><strong>Género:</strong> {{ movieDetails.value.Genre }}</p>
          <p><strong>Director:</strong> {{ movieDetails.value.Director }}</p>
          <p><strong>Actores:</strong> {{ movieDetails.value.Actors }}</p>
          <p class="mt-4">
            <strong>Sinopsis:</strong> {{ movieDetails.value.Plot }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-2">Calificaciones:</h2>
          <ul>
            <li
              v-for="rating in movieDetails.value.Ratings"
              :key="rating.Source"
              class="mb-2 flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
            >
              <span>{{ rating?.Source }}</span>
              <span>{{ rating?.Value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { fetchMovieDetails, movieDetails, loading } = useMovies();
const route = useRoute();
const imdbID = route.params.imdbID;

onMounted(async () => {
  fetchMovieDetails(imdbID);
});
</script>
