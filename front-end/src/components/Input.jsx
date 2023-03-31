import PropTypes from 'prop-types';

import * as S from '../styles/common';
import { handleChange } from '../utils/helpers/handleChange';

export default function Input(props) {
  return (
    <S.Label htmlFor={ props.static.id }>
      { props.static.title }
      <S.InputContainer>
        <S.InputIconContainer>
          <S.InputIcon src={ props.static.src } alt={ props.static.alt } />
        </S.InputIconContainer>
        <S.Input
          data-testid="common_login__input-email"
          id={ props.static.id }
          onChange={
            ({ target }) => handleChange(target, props.prevState, props.stateHandler)
          }
          type={ props.static.inputType }
          placeholder={ props.static.placeholder }
          value={ props.value }
        />
      </S.InputContainer>
    </S.Label>
  );
}

Input.propTypes = {
  static: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  prevState: PropTypes.shape({}).isRequired,
  stateHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
