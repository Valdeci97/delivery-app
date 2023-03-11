import { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from '../styles/common';
import { RevealPassword, RevealPasswordIcon } from '../styles/login';
import { handleChange } from '../utils/helpers/handleChange';
import eyeOn from '../assets/eye-icon.svg';
import eyeOff from '../assets/eye-off-icon.svg';

export default function LoginPasswordInput(props) {
  const [reveal, setReveal] = useState(false);

  return (
    <S.Label htmlFor={ props.static.id }>
      { props.static.title }
      <S.InputContainer>
        <S.InputIcon src={ props.static.src } alt={ props.static.alt } />
        <S.Input
          data-testid="common_login__input-password"
          id={ props.static.id }
          onChange={
            ({ target }) => handleChange(target, props.prevState, props.stateHandler)
          }
          type={ reveal ? 'text' : 'password' }
          placeholder={ props.static.placeholder }
          value={ props.value }
        />
        {
          props.value.length > 0
            ? (
              <RevealPassword
                type="button"
                onClick={ () => setReveal(!reveal) }
              >
                <RevealPasswordIcon
                  src={ reveal ? eyeOff : eyeOn }
                  alt={ props.static.alt }
                />
              </RevealPassword>
            ) : null
        }
      </S.InputContainer>
    </S.Label>
  );
}

LoginPasswordInput.propTypes = {
  static: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  prevState: PropTypes.shape({}).isRequired,
  stateHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
