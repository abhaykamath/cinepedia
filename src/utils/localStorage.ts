const PREFIX = "cinepedia_";

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

export const isMovieBookmarked = (imdbID: string): boolean => {
  if (!imdbID) return false;
  const data = getItem("bookmarks");
  const bookmarks: string[] = Array.isArray(data) ? data : [];
  return bookmarks.includes(imdbID);
};

export const bookmarkMovie = (imdbID: string) => {
  if (!imdbID) return;
  const data = getItem("bookmarks");
  const bookmarks: string[] = Array.isArray(data) ? data : [];
  if (!bookmarks.includes(imdbID)) {
    setItem("bookmarks", [...bookmarks, imdbID]);
  }
};

export const unbookmarkMovie = (imdbID: string) => {
  if (!imdbID) return;
  const data = getItem("bookmarks");
  const bookmarks: string[] = Array.isArray(data) ? data : [];
  const updated = bookmarks.filter((id) => id !== imdbID);
  setItem("bookmarks", updated);
};

export const toggleBookmark = (imdbID: string) => {
  if (!imdbID) return;
  if (isMovieBookmarked(imdbID)) {
    unbookmarkMovie(imdbID);
  } else {
    bookmarkMovie(imdbID);
  }
};
