import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./containers/Header";
import { Tasks } from "./containers/Tasks";
import { GlobalStles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStles />
      <Header />
      <Tasks />
    </ThemeProvider>
  );
};
