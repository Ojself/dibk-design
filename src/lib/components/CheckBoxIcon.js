import React from 'react';
import PropTypes from 'prop-types';
import {  getThemePaletteBackgroundColor } from '../functions/theme';

import style from './CheckBoxIcon.module.scss';

class CheckBoxIcon extends React.Component {
  render() {
    let inlineStyle = {
      height: this.props.size,
      width: this.props.size,
      fontSize: this.props.size
    };
    if (this.props.theme && this.props.checked){
      inlineStyle = {
        ...inlineStyle,
        color: getThemePaletteBackgroundColor(this.props.theme, 'primary'),
        boxShadow: `0 0 0 1px ${getThemePaletteBackgroundColor(this.props.theme, 'primary')}` // TODO: support theme error color
      }
    }
    return (<span className={`${style.checkBoxIcon} ${this.props.checked ? style.checked : ''} ${this.props.disabled ? style.disabled : ''} ${this.props.showBox ? style.showBox : ''} ${this.props.hasErrors ? style.hasErrors : ''}`} style={inlineStyle}>
      <span className={style.checkmark}>{this.props.checked ? this.props.checkmarkCharacter : ''}</span>
    </span>)
  }
}

CheckBoxIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  showBox: PropTypes.bool,
  theme: PropTypes.object,
  hasErrors: PropTypes.bool,
  checkmarkCharacter: PropTypes.string
}

CheckBoxIcon.defaultProps = {
  size: '20px',
  checked: false,
  disabled: false,
  showBox: true,
  hasErrors: false,
  checkmarkCharacter: '✔'
}

export default CheckBoxIcon;
