import { ThemeProvider } from "@/contexts/theme-provider";
import { lazy, ReactNode, Suspense, useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import PopularThisWeek from "./components/popular-this-week/PopularThisWeek";
import Loader from "./components/Loader";

// Lazy imports
const SearchResults = lazy(() => import("./components/SearchResults"));
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Bookmarked?: boolean;
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

  const handleInputChange = useCallback((e: string) => {
    setInput(e);
  }, []);

  function saveSearchQuery(item: string) {
    const prev_searches = localStorage.getItem("cinepedia_searches");
    if (prev_searches) {
      let list: string[] = JSON.parse(prev_searches);
      if (!list.includes(item)) list = [item, ...list];
      if (list.length > 10) list.pop();
      localStorage.setItem("cinepedia_searches", JSON.stringify(list));
      return;
    }
    localStorage.setItem("cinepedia_searches", JSON.stringify([item]));
  }

  // Query by Search
  async function queryBySearch(searchString: string): Promise<void> {
    setInput("");
    setQuery(searchString);
    setSearchLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=76f27438&s=${searchString}&page=1`
    );
    const movieList = await response.json();
    setMovies(movieList.Search);
    setSearchLoading(false);
    saveSearchQuery(searchString);
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
            <Suspense fallback={<Loader />}>
              <SearchResults query={query} movies={movies} />
            </Suspense>
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
