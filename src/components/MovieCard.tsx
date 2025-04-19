import { MovieCardProps } from "@/App";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="w-[200px] shadow-md hover:shadow-lg transition-shadow p-0 gap-0">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-[300px] object-cover rounded-t-md"
      />
      <CardContent className="p-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{movie.Year}</span>
          <Badge variant="secondary" className="text-[10px] capitalize">
            {movie.Type}
          </Badge>
        </div>
        <h3 className="text-sm mt-1 font-semibold line-clamp-2">
          {movie.Title}
        </h3>
      </CardContent>
    </Card>
  );
};
