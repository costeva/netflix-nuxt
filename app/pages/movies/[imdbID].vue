<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Spinner
      v-if="!movieDetails"
      :loading="true"
      :label="'Cargando...'"
      align="top"
      color="red-500"
    />
    <div v-else class="container mx-auto px-4 py-6">
      <div class="relative">
        <img
          :src="movieDetails.Poster"
          :alt="movieDetails.Title"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1
          class="absolute bottom-4 left-4 text-3xl font-bold bg-black/70 px-3 py-1 rounded-md"
        >
          {{ movieDetails.Title }}
        </h1>
      </div>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p><strong>Año:</strong> {{ movieDetails.Year }}</p>
          <p><strong>Duración:</strong> {{ movieDetails.Runtime }}</p>
          <p><strong>Género:</strong> {{ movieDetails.Genre }}</p>
          <p><strong>Director:</strong> {{ movieDetails.Director }}</p>
          <p><strong>Actores:</strong> {{ movieDetails.Actors }}</p>
          <p class="mt-4"><strong>Sinopsis:</strong> {{ movieDetails.Plot }}</p>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-2">Calificaciones:</h2>
          <ul>
            <li
              v-for="rating in movieDetails.Ratings"
              :key="rating.Source"
              class="mb-2 flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
            >
              <span>{{ rating.Source }}</span>
              <span>{{ rating.Value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

import Spinner from '@/components/Spinner.vue';
<script setup>
const { fetchMovieDetails, movieDetails, loading } = useMovies();
const route = useRoute();
console.log(movieDetails, "  detallemovies");
const imdbID = route.params.imdbID;

onMounted(async () => {
  fetchMovieDetails(imdbID);
});
</script>
