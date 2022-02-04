import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDarkTheme } from "../../toolbox/hooks/useDarkTheme";

import styles from "./AppBarCustom.module.sass";
export const AppBarCustom = () => {
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asis Melgarejo
          </Typography>
          <Box className={styles.Links}>
            <Link to="/" className={styles.Link}>
              <Typography variant="h6" component="span">
                Inicio
              </Typography>
            </Link>
          </Box>
          <IconButton onClick={handleDarkTheme}>
            {darkTheme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={styles.Placeholder} />
    </Box>
  );
};
