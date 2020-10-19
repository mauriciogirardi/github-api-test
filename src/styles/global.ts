import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/1587379725719-attachment.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color:  ${props => props.theme.colors.background};
    background-image: url(${githubBackground}) ;
    background-repeat: no-repeat;
    background-position: 60% top;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.title};
    height: 100vh;
  }

  strong {
    color: ${props => props.theme.colors.title};
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    position: relative;
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
