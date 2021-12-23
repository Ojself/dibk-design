import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonInput from './RadioButtonInput';
import style from './RadioButtonListItem.module.scss';

class RadioButtonListItem extends React.Component {
  render() {
    return (<div className={`${style.radioButtonListItem} ${this.props.disabled ? style.disabled : ''} ${this.props.compact ? style.compact : ''} ${this.props.contentOnly ? style.contentOnly : ''} ${this.props.hasErrors ? style.hasErrors : ''}`}>
    <RadioButtonInput onChange={this.props.onChange} inputValue={this.props.inputValue} checked={this.props.checked} disabled={this.props.disabled} contentOnly={this.props.contentOnly} hasErrors={this.props.hasErrors} id={this.props.id} theme={this.props.theme}>{this.props.children}</RadioButtonInput>
    </div>)
  }
}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  inputValue: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object,
  hasErrors: PropTypes.bool
}

RadioButtonListItem.defaultProps = {
  name: '',
  checked: false,
  disabled: false,
  contentOnly: false,
  hasErrors: false
}

export default RadioButtonListItem;
