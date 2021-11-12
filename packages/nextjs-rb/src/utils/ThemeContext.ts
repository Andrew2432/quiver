import * as React from "react";

export interface ThemeProps {
  theme?: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | undefined>>;
}

const ThemeContext = React.createContext<ThemeProps>({} as any);

export default ThemeContext;
