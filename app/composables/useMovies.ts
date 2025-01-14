interface Rating {
  Source: string;
  Value: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetails extends Movie {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Ratings: Rating[];
}

interface FetchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export function useMovies() {
  const router = useRouter();
  const movieDetails: Ref<MovieDetails | null> = ref(null);
  const movieList: Ref<Movie[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<Error | null> = ref(null);

  const goToMovie = (imdbID: string) => {
    router.push(`/movies/${imdbID}`);
  };

  const fetchMultiplePages = async (
    searchTerm: string,
    totalPages: number = 3
  ): Promise<Movie[]> => {
    loading.value = true;
    error.value = null;

    try {
      const allMovies: Movie[] = [];
      for (let page = 1; page <= totalPages; page++) {
        const { data, error: fetchError } = await useFetch<FetchResponse>(
          "https://www.omdbapi.com/",
          {
            query: {
              apikey: "4a308855",
              s: searchTerm,
              page: page.toString(),
            },
          }
        );

        if (fetchError.value) {
          throw new Error(fetchError.value.message);
        }

        allMovies.push(...(data.value?.Search || []));
      }
      movieList.value = allMovies;
      return allMovies;
    } catch (err) {
      error.value = err as Error;
      return [];
    } finally {
      loading.value = false;
    }
  };

  const fetchMovieDetails = async (imdbID: string): Promise<void> => {
    const {
      data,
      status,
      error: fetchError,
    } = await useAsyncData<MovieDetails>(`movieDetails-${imdbID}`, () =>
      $fetch("https://www.omdbapi.com/", {
        params: {
          apikey: "4a308855",
          i: imdbID,
        },
      })
    );

    movieDetails.value = data?.value || null;
    loading.value = status.value === "pending";
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
