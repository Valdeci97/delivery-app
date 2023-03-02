import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import * as localStorage from '../utils/localStorage/localStorage';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const ThemePreference = localStorage.getThemePreference() || 'dark';
  const [theme, setTheme] = useState(ThemePreference);

  const contextValue = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
