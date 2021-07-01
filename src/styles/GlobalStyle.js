import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --text-color: #cdd9e5;
  --border: 20px;
}

body {
  color: var(--text-color);
  text-transform: capitalize;
  background: #22272e;
}
`;
