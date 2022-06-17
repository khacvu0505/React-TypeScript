import { createContext, ReactNode, useState } from "react";
interface MovieContextProps {
  children: ReactNode;
}
interface Movie {
  id: string;
  title: string;
}
interface MovieContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}
const movieContextDefaultData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(
  movieContextDefaultData
);

const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);
  const addMovie = (title: string) =>
    setMovies([
      ...movies,
      { id: Math.random().toString().substr(2, 5), title },
    ]);
  const deleteMovie = (id: string) =>
    setMovies((data) => data.filter((ele) => ele.id !== id));

  const movieContextData = {
    movies,
    addMovie,
    deleteMovie,
  };
  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
