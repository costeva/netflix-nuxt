import { debounce } from "lodash-es";
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export function useSearchMovies() {
  const searchQuery = ref("");
  const results = ref<Movie[]>([]);
  const loading = ref(false);
  const error = ref("");
  const currentPage = ref(1);
  const totalResults = ref(0);
  const router = useRouter();
  const totalPages = computed(() => Math.ceil(totalResults.value / 10));

  const fetchMovies = async (
    query: string,
    page: number = 1
  ): Promise<void> => {
    loading.value = true;
    error.value = "";

    try {
      const { data, error: fetchError } = await useFetch<{
        Search: Movie[];
        totalResults: string;
      }>("https://www.omdbapi.com/", {
        query: {
          apikey: "4a308855",
          s: query,
          page: page.toString(),
        },
      });

      if (fetchError.value) {
        throw new Error(fetchError.value.message);
      }

      results.value = data.value?.Search || [];
      totalResults.value = parseInt(data.value?.totalResults || "0", 10);
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  };

  const debouncedFetch = debounce((query: string) => {
    fetchMovies(query);
  }, 300);

  const handleInput = (query: string) => {
    searchQuery.value = query;
    currentPage.value = 1;
    debouncedFetch(query);
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

  const goToMovie = (imdbID: string) => {
    router.push(`/movies/${imdbID}`);
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
