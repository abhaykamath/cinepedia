import { Movie } from "@/App";
import GridView from "./GridView";
import CarouselView from "./CarouselView";
import useIsMobile from "@/hooks/useIsMobile";

// List of popular movies
const popular: Movie[] = [
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
  const isMobileView = useIsMobile();
  return (
    <div className="flex flex-col gap-4 items-center p-4 pb-16 w-full">
      <h2 className="w-full max-w-7xl text-center text-3xl text-[#f5c518] font-bold">
        Popular this week
      </h2>
      {isMobileView ? (
        <CarouselView movies={popular} />
      ) : (
        <GridView movies={popular} />
      )}
    </div>
  );
};

export default PopularThisWeek;
