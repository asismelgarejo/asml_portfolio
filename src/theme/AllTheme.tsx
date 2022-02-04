import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useDarkTheme } from "../toolbox/hooks/useDarkTheme";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface AllThemeProps {
  children: React.ReactNode;
}

const AllTheme: React.FC<AllThemeProps> = (props) => {
  const [darkTheme] = useDarkTheme();
  const theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
      text: {
        secondary: grey[900],
      },
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default AllTheme;
