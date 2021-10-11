import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor, getThemePaletteTextColor, getThemePaletteBorderColor } from '../functions/theme';
import style from './Button.module.scss';

class Button extends React.Component {

  getArrowClass() {
    switch (this.props.arrow) {
      case 'left':
        return style.hasArrowLeft;
      case 'right':
        return style.hasArrowRight
      default:
        return ''
    }
  }

  getThemeStyle(theme, color) {
    return {
      backgroundColor: getThemePaletteBackgroundColor(theme, color),
      color: getThemePaletteTextColor(theme, color),
      borderColor: getThemePaletteBorderColor(theme, color),
      borderWidth: getThemePaletteBorderColor(theme, color) ? '1px' : '0'
    }
  }

  render() {
    let buttonProps = { ...this.props };
    delete buttonProps.noHover
    const themeStyle = this.props.theme ? this.getThemeStyle(this.props.theme, this.props.color) : null;
    const className = `${style.button} ${style[this.props.color]} ${style[this.props.size]} ${this.getArrowClass()} ${this.props.theme ? style.hasTheme : ''} ${this.props.noHover ? style.noHover : ''} ${this.props.rounded ? style.rounded : ''}`;
    return (<button {...buttonProps} className={className} style={themeStyle}>{this.props.content}</button>)
  }
}

Button.propTypes = {
  /** Text content inside button */
  content: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary']),
  size: PropTypes.oneOf(['small', 'regular']),
  arrow: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.object,
  disabled: PropTypes.bool,
  noHover: PropTypes.bool,
  rounded: PropTypes.bool
}

Button.defaultProps = {
  content: 'button',
  color: 'default',
  size: 'regular',
  disabled: false,
  noHover: false
}

export default Button;
