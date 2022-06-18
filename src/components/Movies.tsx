import { Box, Button, Chip, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { ThemeContext } from "../context/ThemeContext";
import { OverridableStringUnion } from "@mui/types";

const Movies = () => {
  // state
  const [movie, setMovie] = useState<string>("");

  const onMovieInputchange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);
  const handleDeleteMovie = () => {};

  // context
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as OverridableStringUnion<
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
  >;
  const bgButton = theme as OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  >;
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favorite movie"
          variant="outlined"
          className="myMovieInput"
          onChange={onMovieInputchange}
          value={movie}
        />
        <Button
          variant="contained"
          color={bgButton}
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((item) => (
          <Chip
            key={item.id}
            label={item.title}
            clickable
            color={chipTheme}
            onDelete={deleteMovie.bind(this, item.id)}
            className="movieChip"
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
