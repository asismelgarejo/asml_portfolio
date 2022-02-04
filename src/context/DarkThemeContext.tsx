import { createContext, Dispatch, SetStateAction, useState } from "react";

export const DarkThemeContext = createContext<{
  darkTheme: boolean;
  setDarkTheme: any;
  //   setDarkTheme: Dispatch<SetStateAction<boolean>>;
}>({
  darkTheme: true,
  setDarkTheme: () => {},
});

interface DarkThemeProviderProps {
  children: React.ReactNode;
}

export const DarkThemeProvider: React.FC<DarkThemeProviderProps> = ({
  children,
}) => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
