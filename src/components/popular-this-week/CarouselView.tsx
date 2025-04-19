import { Movie } from "@/App";
import { MovieCard } from "../MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface CarouselViewProps {
  movies: Movie[];
}

const CarouselView = ({ movies }: CarouselViewProps) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[250px]"
      >
        <CarouselContent className="-ml-1">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.imdbID}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 flex justify-center">
                <MovieCard movie={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselView;
