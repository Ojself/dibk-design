"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Button extends _react.default.Component {
  getArrowClass() {
    switch (this.props.arrow) {
      case 'left':
        return _ButtonModule.default.hasArrowLeft;

      case 'right':
        return _ButtonModule.default.hasArrowRight;

      default:
        return '';
    }
  }

  getThemeStyle(theme, color) {
    return {
      backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
      color: (0, _theme.getThemePaletteTextColor)(theme, color),
      borderColor: (0, _theme.getThemePaletteBorderColor)(theme, color),
      borderWidth: (0, _theme.getThemePaletteBorderColor)(theme, color) ? '1px' : '0'
    };
  }

  render() {
    let buttonProps = { ...this.props
    };
    delete buttonProps.noHover;
    delete buttonProps.rounded;
    const themeStyle = this.props.theme ? this.getThemeStyle(this.props.theme, this.props.color) : null;
    const className = "".concat(_ButtonModule.default.button, " ").concat(_ButtonModule.default[this.props.color], " ").concat(_ButtonModule.default[this.props.size], " ").concat(this.getArrowClass(), " ").concat(this.props.theme ? _ButtonModule.default.hasTheme : '', " ").concat(this.props.noHover ? _ButtonModule.default.noHover : '', " ").concat(this.props.rounded ? _ButtonModule.default.rounded : '');
    return /*#__PURE__*/_react.default.createElement("button", _extends({}, buttonProps, {
      className: className,
      style: themeStyle
    }), this.props.content);
  }

}

Button.propTypes = {
  /** Text content inside button */
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'primary']),
  size: _propTypes.default.oneOf(['small', 'regular']),
  arrow: _propTypes.default.oneOf(['left', 'right']),
  theme: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  noHover: _propTypes.default.bool,
  rounded: _propTypes.default.bool
};
Button.defaultProps = {
  content: 'button',
  color: 'default',
  size: 'regular',
  disabled: false,
  noHover: false
};
var _default = Button;
exports.default = _default;