import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';
import ToastMessage from '../utils/helpers/toastifyMessage';
import { registerFormInitialValue } from '../utils/constants/registerFormInitialValue';
import { register } from '../utils/api/service';
import { toastResponse } from '../utils/toast';
import * as S from '../styles/register';
import proto from '../assets/register.svg';
import { registerProps, roleProps } from '../utils/constants/props';
import Input from './Input';
import PasswordInput from './PasswordInput';
import RoleInput from './RoleInput';
import { validatePassword, validateEmail } from '../utils/helpers/validateFormField';
import { checkInvalidFields } from '../utils/helpers/checkInvalidFields';

export default function RegisterForm() {
  const [state, setState] = useState(registerFormInitialValue);

  const { theme } = useContext(AppContext);

  const navigate = useNavigate();

  const MIN_NAME_LENGTH = 3;

  const checkFields = () => {
    if (state.name.length < MIN_NAME_LENGTH) {
      return { message: 'Preencha todos os campos' };
    }
    const email = checkInvalidFields(state.email, validateEmail, 'e-mail');
    const password = checkInvalidFields(state.password);
    const message = email.message || password.message;
    return { message };
  };

  const sendRegisterInfo = async () => {
    const toastTheme = theme === 'dark' ? 'light' : 'dark';
    const { message } = checkFields();
    if (message) {
      const { response } = toastResponse(message, toastTheme);
      return response();
    }

    if (validatePassword(state.password)) {
      const { response } = toastResponse(<ToastMessage />, toastTheme);
      return response();
    }

    const TWO_SECONDS = 2000;

    const userInfo = await register(state.name, state.email, state.password, state.role);

    if (!userInfo) {
      const {
        response,
      } = toastResponse('Pessoa usuária já cadastrada', toastTheme, 'error');
      return response();
    }

    const { response } = toastResponse(
      'Cadastro efetuado com sucesso!', toastTheme, 'success',
    );
    response();
    setTimeout(() => navigate('/login'), TWO_SECONDS);
  };

  return (
    <S.RegisterContainer>
      <S.Image
        src={ proto }
        alt="desenho de mulher com camisa laranja segurando cartaz de mesma cor"
      />
      <S.RegisterForm isDarkMode={ theme === 'dark' }>
        <Input
          static={ registerProps.nameInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.name }
        />
        <Input
          static={ registerProps.emailInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.email }
        />
        <PasswordInput
          static={ registerProps.passwordInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.password }
        />
        <RoleInput
          title={ roleProps.user.title }
          prevState={ state }
          stateHandler={ setState }
          options={ roleProps.user.options }
        />
        <S.Button
          data-testid="common_register__button-register"
          type="button"
          onClick={ () => sendRegisterInfo() }
          isDarkMode={ theme === 'dark' }
        >
          Cadastrar
        </S.Button>
      </S.RegisterForm>
    </S.RegisterContainer>
  );
}
