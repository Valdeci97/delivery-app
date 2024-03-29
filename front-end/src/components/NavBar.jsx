import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { localStorageUser } from '../utils/localStorage/localStorage';
import * as S from '../styles/productNavBar';
import Switch from './Switch';
import AppContext from '../context/AppContext';

export default function BasicNavBar({ links, dataTestIds }) {
  const { theme } = useContext(AppContext);
  const navigate = useNavigate();

  const isDarkMode = theme === 'dark';

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <S.Container>
      <S.Nav>
        <S.List isDarkMode={ isDarkMode }>
          { links.map(({ testid, text, path }) => (
            <Link
              to={ path }
              data-testid={ testid }
              key={ testid }
            >
              { text }
            </Link>
          )) }
        </S.List>
      </S.Nav>
      <S.RightSide>
        <S.Title
          data-testid={ dataTestIds.name }
          isDarkMode={ isDarkMode }
        >
          { localStorageUser().name }
        </S.Title>
        <S.Logout
          data-testid={ dataTestIds.button }
          onClick={ logout }
          type="button"
          isDarkMode={ isDarkMode }
        >
          Sair
        </S.Logout>
      </S.RightSide>
      <Switch />
    </S.Container>
  );
}

BasicNavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      testid: PropTypes.string,
      path: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  dataTestIds: PropTypes.shape({
    name: PropTypes.string,
    button: PropTypes.string,
  }).isRequired,
};

BasicNavBar.defaultProps = {
  links: [],
};
