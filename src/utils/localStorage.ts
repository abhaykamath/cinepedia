import { Movie } from "@/App";

const PREFIX = "cinepedia_";

// Local Storage Actions
export const setItem = (key: string, value: any) => {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const item = localStorage.getItem(PREFIX + key);
  return item ? JSON.parse(item) : null;
};

export const removeItem = (key: string) => {
  localStorage.removeItem(PREFIX + key);
};

export const clearStorage = () => {
  localStorage.clear();
};

// Bookmark Feature - Actions
export const isMovieBookmarked = (imdbID: string): boolean => {
  if (!imdbID) return false;
  const data = getItem("bookmarks");
  const bookmarks: Movie[] = Array.isArray(data) ? data : [];
  return bookmarks.map((item) => item.imdbID).includes(imdbID);
};

export const bookmarkMovie = (movie: Movie) => {
  if (!movie) return;
  const data = getItem("bookmarks");
  const bookmarks: Movie[] = Array.isArray(data) ? data : [];
  if (!bookmarks.map((item) => item.imdbID).includes(movie.imdbID)) {
    setItem("bookmarks", [...bookmarks, movie]);
  }
};

export const unbookmarkMovie = (imdbID: string) => {
  if (!imdbID) return;
  const data = getItem("bookmarks");
  const bookmarks: Movie[] = Array.isArray(data) ? data : [];
  const updated = bookmarks.filter((item) => item.imdbID !== imdbID);
  setItem("bookmarks", updated);
};

export const toggleBookmark = (movie: Movie) => {
  if (!movie) return;
  if (isMovieBookmarked(movie.imdbID)) {
    unbookmarkMovie(movie.imdbID);
  } else {
    bookmarkMovie(movie);
  }
};

// Like Feature - Actions
export const isMovieLiked = (imdbID: string): boolean => {
  if (!imdbID) return false;
  const data = getItem("likes");
  const likes: string[] = Array.isArray(data) ? data : [];
  return likes.includes(imdbID);
};

export const likeMovie = (imdbID: string) => {
  if (!imdbID) return;
  const data = getItem("likes");
  const likes: string[] = Array.isArray(data) ? data : [];
  if (!likes.includes(imdbID)) {
    setItem("likes", [...likes, imdbID]);
  }
};

export const dislikeMovie = (imdbID: string) => {
  if (!imdbID) return;
  const data = getItem("like");
  const likes: string[] = Array.isArray(data) ? data : [];
  const updated = likes.filter((id) => id !== imdbID);
  setItem("likes", updated);
};

export const toggleLike = (imdbID: string) => {
  if (!imdbID) return;
  if (isMovieLiked(imdbID)) {
    dislikeMovie(imdbID);
  } else {
    likeMovie(imdbID);
  }
};
