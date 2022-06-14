import React, { useContext } from "react";
import { Fab } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

// *** styles

const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color={theme}
      variant="extended"
      className="toggleTheme"
      onClick={() => toggleTheme(theme === "primary" ? "secondary" : "primary")}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;
