"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Label extends _react.default.Component {
  render() {
    let labelProps = { ...this.props
    };
    delete labelProps.inline;
    delete labelProps.normalCursor;
    const className = "".concat(_LabelModule.default.label, " ").concat(this.props.inline ? _LabelModule.default.inline : '', " ").concat(this.props.normalCursor ? _LabelModule.default.normalCursor : '');
    return /*#__PURE__*/_react.default.createElement("label", _extends({}, labelProps, {
      className: className
    }), this.props.children);
  }

}

Label.propTypes = {
  inline: _propTypes.default.bool,
  normalCursor: _propTypes.default.bool
};
Label.defaultProps = {
  inline: false,
  normalCursor: false
};
var _default = Label;
exports.default = _default;