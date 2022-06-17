import React from "react";
import "./App.css";
//  *** Components
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import ThemeContextProvider from "./context/ThemeContext";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./context/MovieContext";
import Movies from "./components/Movies";

function App() {
  return (
    <MovieContextProvider>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <Movies />
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </MovieContextProvider>
  );
}

export default App;
