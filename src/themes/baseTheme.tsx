import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import Theme from "./theme";

const BaseThemeProvider = ({ children }: BaseThemeProviderProps) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

interface BaseThemeProviderProps {
  children: ReactNode;
}

export default BaseThemeProvider;
