import React from "react";
import { DarkThemeProvider } from "./DarkThemeContext";

interface AllProviderProps {
  children: React.ReactNode;
}
const AllContext: React.FC<AllProviderProps> = ({ children }) => {
  return <DarkThemeProvider>{children}</DarkThemeProvider>;
};
export default AllContext;
