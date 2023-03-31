// to-do  <a href="https://storyset.com/business">Business illustrations by Storyset</a>

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from './Input';
import { loginFormInitialValue } from '../utils/constants/loginFormInitialValue';
import { login } from '../utils/api/service';
import { setLocalStorageUser } from '../utils/localStorage/localStorage';
import { toastResponse } from '../utils/toast';
import AppContext from '../context/AppContext';
import * as S from '../styles/login';
import beer from '../assets/beer.svg';
import { loginProps } from '../utils/constants/props';
import PasswordInput from './PasswordInput';
import { checkInvalidFields } from '../utils/helpers/checkInvalidFields';
import { validateEmail } from '../utils/helpers/validateFormField';

export default function LoginForm() {
  const [state, setState] = useState(loginFormInitialValue);
  const navigate = useNavigate();

  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

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
    const email = checkInvalidFields(state.email, validateEmail, 'e-mail');
    const password = checkInvalidFields(state.password);
    const message = email.message || password.message;
    return { message };
  }

  async function sendLoginInfo() {
    const { message } = checkFields();
    const toastTheme = theme === 'dark' ? 'light' : 'dark';
    if (message) {
      const { response } = toastResponse(message, toastTheme);
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
    setLocalStorageUser({ ...user, token: `Bearer ${token}` });
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
        <Input
          static={ loginProps.emailInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.email }
        />
        <PasswordInput
          static={ loginProps.passwordInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.password }
        />
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
