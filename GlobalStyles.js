import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html {
    background-color: white;
    font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    p {
      margin: 0;
    }
  }
`;
export default function GlobalStyle() {
  return (
    <div>
      <GlobalStyles />
    </div>
  );
}
