import { MovieCardProps } from "@/App";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bookmark, BookmarkCheck, Heart } from "lucide-react";
import { useState } from "react";
import {
  isMovieBookmarked,
  isMovieLiked,
  toggleBookmark,
  toggleLike,
} from "@/utils/localStorage";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [bookmarked, setBookmarked] = useState(
    movie.Bookmarked || isMovieBookmarked(movie.imdbID)
  );
  const [liked, setLiked] = useState(isMovieLiked(movie.imdbID) || false);

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow p-0 gap-0">
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
        {/* Top row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {/* Left */}
          <div className="flex items-center gap-2">
            <span>{movie.Year}</span>
            <Badge variant="secondary" className="text-[10px] capitalize">
              {movie.Type}
            </Badge>
          </div>

          {/* Right */}
          <div className="flex gap-1">
            {/* Bookmark Icon - Feature */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(movie);
                setBookmarked((bookmarked) => !bookmarked);
              }}
            >
              {bookmarked ? <BookmarkCheck fill="#ffffff"/> : <Bookmark />}
            </div>
            {/* Like Icon - Feature */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(movie.imdbID);
                setLiked((liked) => !liked);
              }}
            >
              {liked ? <Heart fill="#cd486b" /> : <Heart />}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <h3 className="text-md mt-1 font-semibold line-clamp-2 select-none">
          {movie.Title}
        </h3>
      </CardContent>
    </Card>
  );
};
