import { Box, Button, Chip, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { ThemeContext } from "../context/ThemeContext";

const Movies = () => {
  // state
  const [movie, setMovie] = useState<string>("");

  const onMovieInputchange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);
  const handleDeleteMovie = () => {};

  // context
  const { theme } = useContext(ThemeContext);
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
          color="primary"
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
            color="primary"
            onDelete={deleteMovie.bind(this, item.id)}
            className="movieChip"
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
