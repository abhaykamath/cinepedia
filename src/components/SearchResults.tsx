import { SearchResultsProps } from "@/App";
import { MovieCard } from "./MovieCard";
import Separator from "./Separator";

const SearchResults = ({ query, movies }: SearchResultsProps) => {
  return (
    <>
      <div className="p-4">
        <p>Search "{query}"</p>
        <div className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {movies
            ?.sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
            .map((movie) => {
              return <MovieCard key={movie.imdbID} movie={movie} />;
            })}
        </div>
      </div>
      {/* Separator */}
      <Separator />
    </>
  );
};

export default SearchResults;
