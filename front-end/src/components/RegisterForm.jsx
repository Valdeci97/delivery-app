import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';
import ToastMessage from '../utils/helpers/toastifyMessage';
import { registerFormInitialValue } from '../utils/constants/registerFormInitialValue';
import { handleChange } from '../utils/helpers/handleChange';
import { register } from '../utils/api/service';
import { toastResponse } from '../utils/toast';
import * as S from '../styles/register';
import proto from '../assets/register.svg';
import { registerProps } from '../utils/constants/props';
import Input from './Input';
import RegisterPasswordInput from './RegisterPasswordInput';

export default function RegisterForm() {
  const [state, setState] = useState(registerFormInitialValue);

  const { theme } = useContext(AppContext);

  const navigate = useNavigate();

  const validatePassword = (pass) => {
    const PASSWORD_BODY = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/;
    const PASSWORD_LENGTH = /(?:([\w$*&@#])(?!\1)){8,64}/;
    const regex = new RegExp(PASSWORD_BODY.source + PASSWORD_LENGTH.source);
    return !regex.test(pass);
  };

  const sendRegisterInfo = async () => {
    const toastTheme = theme === 'dark' ? 'light' : 'dark';
    if (validatePassword(state.password)) {
      const { response } = toastResponse(<ToastMessage />, toastTheme);
      return response();
    }

    const TWO_SECONDS = 2000;

    const userInfo = await register(state.name, state.email, state.password, state.role);

    if (!userInfo) {
      const { response } = toastResponse('Usuário já cadastrado', toastTheme, 'error');
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
        <RegisterPasswordInput
          static={ registerProps.passwordInput }
          prevState={ state }
          stateHandler={ setState }
          value={ state.password }
        />
        <S.Label htmlFor="role">
          Tipo
          <S.SelectRole
            id="role"
            onChange={ ({ target }) => handleChange(target, state, setState) }
          >
            <S.RoleOption id="cliente">cliente</S.RoleOption>
            <S.RoleOption id="vendedor">vendedor</S.RoleOption>
          </S.SelectRole>
        </S.Label>
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
