import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import * as S from '../styles/loginHeader';
import Switch from './Switch';

export default function Header({ showRegisterButton }) {
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  const navigate = useNavigate();

  return (
    <S.Container isDarkMode={ isDarkMode }>
      <S.Title>
        Delivery App
      </S.Title>
      <S.SwitchContainer alignBetween={ showRegisterButton }>
        {
          showRegisterButton
            ? (
              <S.RegisterButton
                type="button"
                isDarkMode={ isDarkMode }
                onClick={ () => navigate('/register') }
              >
                Cadastre-se
              </S.RegisterButton>) : null
        }
        <Switch />
      </S.SwitchContainer>
    </S.Container>
  );
}

Header.defaultProps = {
  showRegisterButton: false,
};

Header.propTypes = {
  showRegisterButton: PropTypes.bool,
};
