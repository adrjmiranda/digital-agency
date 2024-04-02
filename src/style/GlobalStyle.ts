import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily.montserrat};
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
