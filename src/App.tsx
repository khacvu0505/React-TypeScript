import React from "react";
import "./App.css";
//  *** Components
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ProgressContextProvider>
        <Navbar />
      </ProgressContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
