import React from "react";
import "./App.css";
//  *** Context
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import ThemeContextProvider from "./context/ThemeContext";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./context/MovieContext";
import AuthContextProvider from "./context/AuthContext";
import TopMovieContextProvider from "./context/TopMovieContext";

//  *** Components
import Movies from "./components/Movies";
import { Grid } from "@mui/material";
import TopMovies from "./components/TopMovies";

function App() {
  return (
    <AuthContextProvider>
      <TopMovieContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Grid container>
                <Grid item xs={4}>
                  <TopMovies />
                </Grid>
                <Grid item xs={8}>
                  <Movies />
                </Grid>
              </Grid>
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </TopMovieContextProvider>
    </AuthContextProvider>
  );
}

export default App;
