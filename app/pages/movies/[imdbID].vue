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
      <div class="my-4">
        <NuxtLink
          to="/home"
          aria-label="Volver a la página de inicio"
          class="inline-flex items-center gap-2 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <Icon name="mdi-arrow-left" class="w-4 h-4" />

          <span>Atrás</span>
        </NuxtLink>
      </div>

      <div class="relative">
        <img
          :src="movieDetails.Poster"
          :alt="movieDetails.Title"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1
          id="movie-title"
          class="absolute bottom-4 left-4 text-3xl font-bold bg-black/70 px-3 py-1 rounded-md"
        >
          {{ movieDetails.Title }}
        </h1>
      </div>

      <section
        class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
        aria-labelledby="movie-details"
      >
        <div>
          <h2 class="sr-only">Detalles de la Película</h2>
          <ul class="space-y-2">
            <li>
              <strong>Año:</strong> <span>{{ movieDetails.Year }}</span>
            </li>
            <li>
              <strong>Duración:</strong> <span>{{ movieDetails.Runtime }}</span>
            </li>
            <li>
              <strong>Género:</strong> <span>{{ movieDetails.Genre }}</span>
            </li>
            <li>
              <strong>Director:</strong>
              <span>{{ movieDetails.Director }}</span>
            </li>
            <li>
              <strong>Actores:</strong> <span>{{ movieDetails.Actors }}</span>
            </li>
            <li>
              <strong>Sinopsis:</strong>
              <p class="mt-1">{{ movieDetails.Plot }}</p>
            </li>
          </ul>
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
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { fetchMovieDetails, movieDetails } = useMovies();
const route = useRoute();

const imdbID = route.params.imdbID as string;

onMounted(async () => {
  fetchMovieDetails(imdbID);
});
</script>
