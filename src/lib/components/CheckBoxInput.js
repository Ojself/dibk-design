import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return (<label className={`${style.checkBoxInput} ${this.props.contentOnly ? style.contentOnly : ''} ${this.props.disabled ? style.disabled : ''} ${this.props.hasErrors ? style.hasErrors : ''}`} htmlFor={this.props.id}>
      {
        !this.props.contentOnly
          ? (<React.Fragment>
            <CheckBoxIcon checked={this.props.checked} disabled={this.props.disabled} theme={this.props.theme} hasErrors={this.props.hasErrors} checkmarkCharacter={this.props.checkmarkCharacter} />
            <input onChange={this.props.onChange} type="checkbox" name={this.props.name} id={this.props.id} checked={this.props.checked} disabled={this.props.disabled} />
          </React.Fragment>)
          : <CheckBoxIcon checked={this.props.checked} disabled={this.props.disabled} showBox={false} theme={this.props.theme} />
      }
      <span>{this.props.children}</span>
    </label>)
  }
}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool,
  hasErrors: PropTypes.bool,
  theme: PropTypes.object,
  checkmarkCharacter: PropTypes.string
};
CheckBoxInput.defaultProps = {
  checked: false,
  disabled: false,
  name: '',
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: '✔'
};
export default CheckBoxInput;
