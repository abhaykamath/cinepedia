import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode, useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import PopularThisWeek from "./components/PopularThisWeek";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieCardProps {
  movie: Movie;
  children?: ReactNode;
}

export interface SearchResultsProps {
  query: string;
  movies: Movie[];
}

const App = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      setQuery(e.target.value);
    },
    []
  );

  // Query by Search
  async function queryBySearch(searchString: string): Promise<void> {
    setInput("");
    setSearchLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=76f27438&s=${searchString}&page=1`
    );
    const movieList = await response.json();
    setMovies(movieList.Search);
    setSearchLoading(false);
  }

  // Query by Title

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar
          input={input}
          handleInputChange={handleInputChange}
          queryBySearch={queryBySearch}
        />
        <main className="p-4 flex-1 flex flex-col items-center">
          {/* Searched result */}
          {searchLoading && <Loader />}
          {!searchLoading && movies.length ? (
            <SearchResults query={query} movies={movies} />
          ) : null}

          {/* Popular this week */}
          <PopularThisWeek />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
