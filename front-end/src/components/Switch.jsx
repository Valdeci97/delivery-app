import { useContext } from 'react';
import { Theme, ThemeIcon } from '../styles/switch';
import AppContext from '../context/AppContext';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { setThemePreference } from '../utils/localStorage/localStorage';

export default function Switch() {
  const { theme, setTheme } = useContext(AppContext);

  function handleTheme() {
    const updateTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updateTheme);
    setThemePreference(updateTheme);
  }

  return (
    <Theme type="button" htmlFor="theme" onClick={ () => handleTheme() }>
      <ThemeIcon src={ theme === 'dark' ? sun : moon } alt="" />
    </Theme>
  );
}
