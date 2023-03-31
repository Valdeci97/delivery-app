import { useState } from 'react';
import PropTypes from 'prop-types';

import { handleChange } from '../utils/helpers/handleChange';
import * as S from '../styles/common';
import eyeOn from '../assets/eye-icon.svg';
import eyeOff from '../assets/eye-off-icon.svg';

export default function PasswordInput(props) {
  const [reveal, setReveal] = useState(false);

  const width = props.value.length > 0 ? '80%' : '90%';

  return (
    <S.Label htmlFor={ props.static.id }>
      { props.static.title }
      <S.InputContainer>
        <S.InputIconContainer>
          <S.InputIcon src={ props.static.src } alt={ props.static.alt } />
        </S.InputIconContainer>
        <S.Input
          data-testid="common_login__input-password"
          id={ props.static.id }
          onChange={
            ({ target }) => handleChange(target, props.prevState, props.stateHandler)
          }
          type={ reveal ? 'text' : 'password' }
          placeholder={ props.static.placeholder }
          value={ props.value }
          style={ { width } }
        />
        {
          props.value.length > 0
            ? (
              <S.Pass
                type="button"
                onClick={ () => setReveal(!reveal) }
              >
                <S.PassIcon
                  src={ reveal ? eyeOff : eyeOn }
                  alt={ props.static.alt }
                />
              </S.Pass>
            ) : null
        }
      </S.InputContainer>
    </S.Label>
  );
}

PasswordInput.propTypes = {
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
