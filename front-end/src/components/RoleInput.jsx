import PropTypes from 'prop-types';
import { handleChange } from '../utils/helpers/handleChange';
import { Label, Select, Option } from '../styles/common';

export default function RoleInput(props) {
  return (
    <Label htmlFor="role">
      { props.title }
      <Select
        id="role"
        onChange={
          ({ target }) => handleChange(target, props.prevState, props.stateHandler)
        }
      >
        {props.options.map((opt) => (
          <Option value={ opt.value } key={ opt.value }>
            { opt.text }
          </Option>
        ))}
      </Select>
    </Label>
  );
}

RoleInput.propTypes = {
  title: PropTypes.string.isRequired,
  prevState: PropTypes.shape({}).isRequired,
  stateHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
