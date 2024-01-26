import { createGlobalStyle } from "styled-components";

export const GlobalStles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme["gray-100"]};
    background: ${({ theme }) => theme["gray-600"]};
    -webkit-font-smoothing: antialiased;
  }
`;
