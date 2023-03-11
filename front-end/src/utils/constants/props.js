import mail from '../../assets/mail-icon.svg';
import lock from '../../assets/lock-icon.svg';
import user from '../../assets/user-icon.svg';

export const loginProps = {
  emailInput: {
    id: 'email',
    title: 'Email',
    src: `${mail}`,
    alt: 'envelope com linhas de contorno preto',
    inputType: 'email',
    placeholder: 'seu email',
  },
  passwordInput: {
    id: 'password',
    title: 'Senha',
    src: `${lock}`,
    alt: 'cadeado com linhas de contorno preto',
    placeholder: 'sua senha',
  },
};

export const registerProps = {
  nameInput: {
    id: 'name',
    title: 'Nome',
    src: `${user}`,
    alt: 'cirunferência na cor preta e uma espécie de colchete com cantos arredondados',
    inputType: 'text',
    placeholder: 'seu nome',
  },
  emailInput: { ...loginProps.emailInput },
  passwordInput: { ...loginProps.passwordInput },
};
