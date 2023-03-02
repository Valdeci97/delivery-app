// to-do  <a href="https://storyset.com/business">Business illustrations by Storyset</a>

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginFormInitialValue } from '../utils/constants/loginFormInitialValue';
import { login } from '../utils/api/service';
import { setLocalStorageUser } from '../utils/localStorage/localStorage';
import { toastResponse } from '../utils/toast';
import AppContext from '../context/AppContext';
import * as S from '../styles/login';
import beer from '../assets/beer.svg';
import mail from '../assets/mail-icon.svg';
import lock from '../assets/lock-icon.svg';
import eyeOn from '../assets/eye-icon.svg';
import eyeOff from '../assets/eye-off-icon.svg';

export default function LoginForm() {
  const [state, setState] = useState(loginFormInitialValue);
  const [reveal, setReveal] = useState(false);
  const navigate = useNavigate();

  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  function handleChange(target) {
    const { id, value } = target;
    setState({ ...state, [id]: value });
  }

  function handleRole(role) {
    switch (role) {
    case 'administrator':
      return navigate('/admin/manage');
    case 'customer':
      return navigate('/customer/products');
    default:
      return navigate('/seller/orders');
    }
  }

  function checkFields() {
    if (state.email === '' || state.password === '') {
      return true;
    }
    return false;
  }

  async function sendLoginInfo() {
    const isEmpty = checkFields();
    const toastTheme = theme === 'dark' ? 'light' : 'dark';
    if (isEmpty) {
      const { response } = toastResponse('Preencha todos os campos', toastTheme);
      return response();
    }

    const userInfo = await login(state.email, state.password);
    if (!userInfo) {
      const { response } = toastResponse(
        'E-mail ou senha inválidos', toastTheme, 'error',
      );
      return response();
    }

    const { user, token } = userInfo;
    setLocalStorageUser({ ...user, token });
    handleRole(user.role);
  }

  return (
    <S.Container>
      <S.Logo
        src={ beer }
        alt="Desenho de homem com barba, algumas garrafas de cerveja na cor laranja"
      />
      <S.Form isDarkMode={ isDarkMode }>
        <S.Title>Login</S.Title>
        <S.Label htmlFor="email">
          Email
          <S.InputContainer>
            <S.InputIcon
              src={ mail }
              alt="envelope com linhas de contorno preto"
            />
            <S.Input
              data-testid="common_login__input-email"
              id="email"
              onChange={ ({ target }) => handleChange(target) }
              type="email"
              placeholder="seu email"
              value={ state.email }
              isDarkMode={ isDarkMode }
            />
          </S.InputContainer>
        </S.Label>
        <S.Label htmlFor="password">
          Senha
          <S.InputContainer>
            <S.InputIcon src={ lock } alt="" />
            <S.Input
              data-testid="common_login__input-password"
              id="password"
              onChange={ ({ target }) => handleChange(target) }
              type={ reveal ? 'text' : 'password' }
              placeholder="sua senha"
              value={ state.password }
              isDarkMode={ isDarkMode }
            />
            {
              state.password.length > 0
                ? (
                  <S.RevealPassword
                    type="button"
                    onClick={ () => setReveal(!reveal) }
                  >
                    <S.RevealPasswordIcon src={ reveal ? eyeOff : eyeOn } alt="" />
                  </S.RevealPassword>
                ) : null
            }
          </S.InputContainer>
        </S.Label>
        <S.LoginButton
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => sendLoginInfo() }
          isDarkMode={ isDarkMode }
        >
          Entrar
        </S.LoginButton>
      </S.Form>
    </S.Container>
  );
}
