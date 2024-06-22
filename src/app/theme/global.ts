import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${(props) => props.theme.colors.bgColor};
    min-height: 100vh;
    font-family: Jamsil;
    font-weight: 400;
  }
`;
