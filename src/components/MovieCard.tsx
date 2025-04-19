import { MovieCardProps } from "@/App";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useState } from "react";
import { isMovieBookmarked, toggleBookmark } from "@/utils/localStorage";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [bookmarked, setBookmarked] = useState(
    movie.Bookmarked || isMovieBookmarked(movie.imdbID)
  );
  console.log("card rendered");
  return (
    <Card className="w-[200px] shadow-md hover:shadow-lg transition-shadow p-0 gap-0">
      <img
        src={
          movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/200x300"
        }
        alt={movie.Title}
        className="w-full h-[300px] object-cover rounded-t-md"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/200x300";
        }}
      />
      <CardContent className="p-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{movie.Year}</span>
          <div className="flex gap-1">
            <Badge variant="secondary" className="text-[10px] capitalize">
              {movie.Type}
            </Badge>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(movie.imdbID);
                setBookmarked((bookmarked) => !bookmarked);
              }}
            >
              {bookmarked ? <BookmarkCheck /> : <Bookmark />}
            </div>
          </div>
        </div>
        <h3 className="text-sm mt-1 font-semibold line-clamp-2">
          {movie.Title}
        </h3>
      </CardContent>
    </Card>
  );
};
