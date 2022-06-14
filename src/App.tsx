import React from "react";
import "./App.css";
//  *** Components
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import ThemeContextProvider from "./context/ThemeContext";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

function App() {
  return (
    <ThemeContextProvider>
      <ProgressContextProvider>
        <Navbar />
        <ToggleThemeBtn />
      </ProgressContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
