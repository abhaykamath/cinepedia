import { Movie } from "@/App";
import { MovieCard } from "../MovieCard";

interface GridViewProps {
  movies: Movie[];
}

const GridView = ({ movies }: GridViewProps) => {
  return (
    <div className="w-fit mt-4 py-1 gap-4 sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default GridView;
