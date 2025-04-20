import { Movie } from "@/App";
import { MovieCard } from "../MovieCard";

interface GridViewProps {
  movies: Movie[];
}

const GridView = ({ movies }: GridViewProps) => {
  return (
    <div className="w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mt-4 gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default GridView;
