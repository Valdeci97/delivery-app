import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import Router from './Router';
import GlobalStyle from './styles';

function App() {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Router />
      <GlobalStyle isDarkMode={ theme === 'dark' } />
    </>
  );
}

export default App;
