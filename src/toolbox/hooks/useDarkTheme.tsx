import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext";

export const useDarkTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  return [darkTheme, setDarkTheme];
};
