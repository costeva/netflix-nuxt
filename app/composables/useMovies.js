export function useMovies() {
  const fetchMovies = async (searchTerm, page = 1) => {
    try {
      const { data, error } = await useFetch(
        "https://www.omdbapi.com/?apikey=4a308855",
        {
          params: {
            s: searchTerm,
            page: page.toString(),
          },
        }
      );

      if (error.value) {
        throw new Error(error.value.message);
      }

      return data.value;
    } catch (err) {
      console.error("Error en fetchMovies:", err.message);
      return null;
    }
  };

  const fetchMultiplePages = async (searchTerm, totalPages = 3) => {
    const allMovies = [];
    for (let page = 1; page <= totalPages; page++) {
      const result = await fetchMovies(searchTerm, page);
      if (result && result.Response === "True") {
        allMovies.push(...result.Search);
      } else {
        console.warn(`Página ${page}: ${result?.Error || "Error desconocido"}`);
        break;
      }
    }
    return allMovies;
  };

  return {
    fetchMovies,
    fetchMultiplePages,
  };
}
