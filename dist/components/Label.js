"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Label = props => {
  var _props$htmlTag;
  let labelProps = {
    ...props
  };
  const htmlTag = (_props$htmlTag = props.htmlTag) !== null && _props$htmlTag !== void 0 && _props$htmlTag.length ? props.htmlTag : "label";
  delete labelProps.inline;
  delete labelProps.normalCursor;
  delete labelProps.htmlTag;
  const className = "".concat(_LabelModule.default.label, " ").concat(props.inline ? _LabelModule.default.inline : "", " ").concat(props.normalCursor ? _LabelModule.default.normalCursor : "");
  const labelElement = _react.default.createElement(htmlTag, {
    ...labelProps,
    className,
    id: props.id || null
  }, props.children);
  return labelElement;
};
Label.propTypes = {
  inline: _propTypes.default.bool,
  normalCursor: _propTypes.default.bool,
  htmlTag: _propTypes.default.string
};
Label.defaultProps = {
  inline: false,
  normalCursor: false,
  htmlTag: "label"
};
var _default = exports.default = Label;