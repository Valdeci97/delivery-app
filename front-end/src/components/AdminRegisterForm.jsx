import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { adminRegister } from '../utils/api/service';
import { localStorageUser } from '../utils/localStorage/localStorage';
import * as S from '../styles/adminManage';
import {
  adminRegisterFormInitialValue,
} from '../utils/constants/adminRegisterFormInitialValue';
import AppContext from '../context/AppContext';
import Input from './Input';
import PasswordInput from './PasswordInput';
import { registerProps, roleProps } from '../utils/constants/props';
import RoleInput from './RoleInput';
import { checkInvalidFields } from '../utils/helpers/checkInvalidFields';
import validate from '../utils/helpers/validateFormField';
import { toastResponse } from '../utils/toast';
import ToastMessage from '../utils/helpers/toastifyMessage';

export default function AdminRegisterForm({ update }) {
  const [state, setState] = useState(adminRegisterFormInitialValue);
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  const checkFields = () => {
    const name = checkInvalidFields(state.name, 'nome', validate.nameField);
    const email = checkInvalidFields(state.email, 'e-mail', validate.emailField);
    const password = checkInvalidFields(state.password, 'senha');
    const message = name.message || email.message || password.message;
    return { message };
  };

  const registerUser = async () => {
    const toastTheme = isDarkMode ? 'light' : 'dark';
    const { message } = checkFields();
    if (message) {
      const { response } = toastResponse(message, toastTheme);
      return response();
    }

    if (validate.passwordField(state.password)) {
      const { response } = toastResponse(<ToastMessage />, toastTheme);
      return response();
    }

    const t = localStorageUser().token;
    const user = {
      name: state.name,
      email: state.email,
      password: state.password,
      role: state.role,
    };
    const alreadyRegistered = await adminRegister(user, t);
    if (alreadyRegistered) {
      const {
        response,
      } = toastResponse('Pessoa usuária já cadastrada', toastTheme, 'error');
      return response();
    }

    setState(adminRegisterFormInitialValue);
    update();
  };

  return (
    <S.Container>
      <S.Title isDarkMode={ isDarkMode }>Cadastrar nova pessoa usuária</S.Title>
      <S.Form isDarkMode={ isDarkMode }>
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
          title={ roleProps.admin.title }
          prevState={ state }
          stateHandler={ setState }
          options={ roleProps.admin.options }
        />
        <S.Button
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ registerUser }
          isDarkMode={ isDarkMode }
        >
          CADASTRAR
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

AdminRegisterForm.propTypes = {
  update: PropTypes.func.isRequired,
};
