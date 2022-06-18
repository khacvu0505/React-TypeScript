import React, { useContext, useEffect, useState } from "react";

// *** MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button, Chip, Theme } from "@mui/material";

// *** components
import WelcomeMessage from "./WelcomeMessage";
import Login from "./Login";

// *** styles
import { createStyles, makeStyles } from "@mui/styles";

// *** context
import { ProgressContext } from "../context/ProgressContext";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  // styles
  const classes = useStyles();

  // context
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const { authInfo } = useContext(AuthContext);

  // state
  const [position, setPosition] = useState<string>("Front-End Developer");
  const [time, setTime] = useState<Date>(new Date(Date.now()));
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const { userName, isAuthenticated } = authInfo;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <AppBar position="static" color={theme}>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={1}
            py={2}
          >
            <Typography variant="h6" component="div">
              My Movies
            </Typography>
            <Box textAlign="center">
              <WelcomeMessage position={position} userName={userName} />
              <Chip
                label={`Last time working on this project: ${lastTime} - Status: ${status}`}
                variant="outlined"
                className="chipHeader"
              />
              <Box mt={1}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={position}
                    label="Age"
                    // onChange={handleCountryChange}
                    onChange={(event) =>
                      setPosition(event.target.value as string)
                    }
                    className={classes.positionSelect}
                  >
                    <MenuItem value="Full-Stack Developer">
                      Full-Stack Developer
                    </MenuItem>
                    <MenuItem value="Front-End Developer">
                      Front-End Developer
                    </MenuItem>
                    <MenuItem value="Back-End Developer">
                      Back-End Developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box textAlign="center">
              <Box my={1}>
                <Typography variant="h6">{time.toLocaleString()}</Typography>
              </Box>
              <Button
                variant="outlined"
                className="btnLogin"
                onClick={() => setLoginOpen(true)}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
            </Box>
            <Login isOpen={loginOpen} handleClose={() => setLoginOpen(false)} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
