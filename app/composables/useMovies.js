export function useMovies() {
  const router = useRouter();
  const movieDetails = ref(null);
  const movieList = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const goToMovie = (imdbID) => {
    router.push(`/movies/${imdbID}`);
  };

  const fetchMultiplePages = async (searchTerm, totalPages = 3) => {
    loading.value = true;
    error.value = null;

    try {
      const allMovies = [];
      for (let page = 1; page <= totalPages; page++) {
        const {
          data,
          error: fetchError,
          status,
        } = await useFetch("https://www.omdbapi.com/", {
          query: {
            apikey: "4a308855",
            s: searchTerm,
            page: page.toString(),
          },
        });

        if (fetchError.value) {
          throw new Error(fetchError.value.message);
        }

        if (data.value?.Response === "True") {
          allMovies.push(...data.value.Search);
        } else {
          console.warn(
            `Página ${page}: ${data.value?.Error || "Error desconocido"}`
          );
          break;
        }
        loading.value = status.value === "pending";
      }

      movieList.value = allMovies;
      return allMovies;
    } catch (err) {
      error.value = err.message;
      return [];
    } finally {
      loading.value = false;
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    const {
      data,
      status,
      error: fetchError,
    } = await useAsyncData(`movieDetails-${imdbID}`, () =>
      $fetch("https://www.omdbapi.com/", {
        params: {
          apikey: "4a308855",
          i: imdbID,
        },
      })
    );

    movieDetails.value = data?.value || null;
    loading.value = status;
    error.value = fetchError?.value || null;
  };

  return {
    movieList,
    movieDetails,
    loading,
    error,
    fetchMultiplePages,
    fetchMovieDetails,
    goToMovie,
  };
}
