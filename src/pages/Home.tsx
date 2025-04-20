import { HomeProps } from "@/App";
import Loader from "@/components/Loader";
import PopularThisWeek from "@/components/popular-this-week/PopularThisWeek";
import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";

const Home = ({ searchLoading, movies, query }: HomeProps) => {
  return (
    <>
      {/* Searched result */}
      {searchLoading && <Loader />}
      {!searchLoading && movies.length ? (
        <Suspense fallback={<Loader />}>
          <SearchResults query={query} movies={movies} />
        </Suspense>
      ) : null}

      {/* Popular this week */}
      <PopularThisWeek />
    </>
  );
};

export default Home;
