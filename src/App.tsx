import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStles />
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
};
