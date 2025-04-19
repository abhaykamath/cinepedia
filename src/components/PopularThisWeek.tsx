import { MovieCard } from "./MovieCard";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// List of popular movies
const popular_this_week = [
  {
    Title: "Snow White",
    Year: "2025",
    imdbID: "tt6208148",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Snow White and the Huntsman",
    Year: "2012",
    imdbID: "tt1735898",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2JjYWUyZjUtMDg3OS00MGIyLTgyN2QtYjIyY2VlYzViYThlXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Snow White and the Seven Dwarfs",
    Year: "1937",
    imdbID: "tt0029583",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
  },
  {
    Title: "Society of the Snow",
    Year: "2023",
    imdbID: "tt16277242",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODM1MWQ1MWUtMDM1ZS00ZjI3LTg4ZTMtNmI1ZDAwNmE4MTNiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Dead Snow",
    Year: "2009",
    imdbID: "tt1278340",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmZkOWI5NDgtODgyNi00MmFhLTlmYmEtNmEzNTZhMjlmZTQxXkEyXkFqcGc@._V1_SX300.jpg",
  },
];

const PopularThisWeek = () => {
  return (
    <div className="flex flex-col items-center p-4 w-full">
      <h2 className="text-center text-3xl text-[#f5c518] font-bold">
        Popular this week
      </h2>
      <div className="hidden w-fit mt-4 py-1 gap-4 sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {popular_this_week.map((movie, index) => (
          <MovieCard key={movie.imdbID} movie={movie}>
            <Badge variant="secondary" className="text-[10px] capitalize">
              {index + 1}
            </Badge>
          </MovieCard>
        ))}
      </div>
      <div className="sm:hidden w-full flex justify-center mt-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[250px]"
        >
          <CarouselContent className="-ml-1">
            {popular_this_week.map((movie) => (
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
    </div>
  );
};

export default PopularThisWeek;
