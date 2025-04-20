import GridView from "@/components/popular-this-week/GridView";
import { getItem } from "@/utils/localStorage";
import { Bookmark } from "lucide-react";
import { useState } from "react";

const Bookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState(
    getItem("bookmarks") || []
  );
  return (
    <div className="flex flex-col items-center p-4 pb-16 w-full">
      <p className="w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl text-center sm:text-start flex gap-2 items-end">
        <Bookmark />
        <span>Bookmarks</span>
      </p>
      <GridView movies={bookmarkedMovies} />
    </div>
  );
};

export default Bookmarks;
