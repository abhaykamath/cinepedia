import { SearchResultsProps } from "@/App";
import Separator from "./Separator";
import useIsMobile from "@/hooks/useIsMobile";
import CarouselView from "./popular-this-week/CarouselView";
import GridView from "./popular-this-week/GridView";

const SearchResults = ({ query, movies }: SearchResultsProps) => {
  const isMobileView = useIsMobile();
  return (
    <>
      <div className="flex flex-col items-center p-4 pb-16 w-full">
        <p className="w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl text-center sm:text-start">Search "{query}"</p>
        {isMobileView ? (
          <CarouselView movies={movies} />
        ) : (
          <GridView movies={movies} />
        )}
      </div>
      {/* Separator */}
      <Separator />
    </>
  );
};

export default SearchResults;
