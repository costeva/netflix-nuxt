import { debounce } from "lodash-es";
export function useSearchMovies() {
  const searchQuery = ref("");
  const results = ref([]);
  const loading = ref(false);
  const error = ref("");
  const currentPage = ref(1);
  const totalResults = ref(0);
  const router = useRouter();
  const totalPages = computed(() => Math.ceil(totalResults.value / 10));

  const goToMovie = (imdbID) => {
    router.push(`/movies/${imdbID}`);
  };
  const fetchMovies = async (query, page) => {
    loading.value = true;
    error.value = "";
    results.value = [];
    totalResults.value = 0;
    try {
      const response = await $fetch("https://www.omdbapi.com/", {
        params: {
          apikey: "4a308855",
          s: query,
          page: page,
        },
      });

      if (response.Response === "True") {
        results.value = response.Search;
        totalResults.value = parseInt(response.totalResults, 10);
      } else {
        results.value = [];
        totalResults.value = 0;
        error.value = response.Error || "No se encontraron resultados.";
      }
    } catch (err) {
      error.value = "Error al obtener los datos.";
      results.value = [];
      totalResults.value = 0;
    } finally {
      loading.value = false;
    }
  };

  const debouncedFetch = debounce((query) => {
    currentPage.value = 1;
    fetchMovies(query, currentPage.value);
  }, 500);

  const handleInput = () => {
    debouncedFetch(searchQuery.value);
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
      fetchMovies(searchQuery.value, currentPage.value);
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
      fetchMovies(searchQuery.value, currentPage.value);
    }
  };

  return {
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
  };
}
