// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import CheckBoxIcon from './CheckBoxIcon';

// Assets
import asterisk from '../assets/svg/asterisk.svg?url';

// Stylesheets
import style from './CheckBoxInput.module.scss';

const CheckBoxInput = (props) => {
  const labelProps = {
    className: `${style.checkBoxInput} ${
      props.contentOnly ? style.contentOnly : ''
    } ${props.disabled ? style.disabled : ''} ${
      props.hasErrors ? style.hasErrors : ''
    }`,
    htmlFor: props.id,
  };

  const iconProps = {
    checked: props.checked,
    disabled: props.disabled,
    showBox: !props.contentOnly,
    hasErrors: props.contentOnly && props.hasErrors,
    checkmarkCharacter: props.checkmarkCharacter,
  };

  const inputProps = {
    id: props.id,
    name: props.name || null,
    type: 'checkbox',
    checked: props.checked,
    disabled: props.disabled,
    required: props.required || props.requiredGroup,
    onChange: props.onChange,
    tabIndex: props.tabIndex || null,
    'aria-controls': props['aria-controls'],
    'aria-invalid': props.hasErrors ? 'true' : null,
    'aria-describedby': props['aria-describedby'],
  };

  return (
    <label {...labelProps}>
      {!props.contentOnly ? (
        <React.Fragment>
          <CheckBoxIcon {...iconProps} />
          <input {...inputProps} />
        </React.Fragment>
      ) : (
        <CheckBoxIcon {...iconProps} />
      )}
      <span className={style.labelText}>
        {props.children}
        {props.required && (
          <img src={asterisk} alt="" className={style.requiredSymbol} />
        )}
      </span>
    </label>
  );
};

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  requiredGroup: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool,
  hasErrors: PropTypes.bool,
  checkmarkCharacter: PropTypes.string,
  'aria-controls': PropTypes.string,
  'aria-describedby': PropTypes.string,
};
CheckBoxInput.defaultProps = {
  checked: false,
  disabled: false,
  required: false,
  requiredGroup: false,
  name: '',
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: '✔',
};

export default CheckBoxInput;
