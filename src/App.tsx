/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setThema] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setThema(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
