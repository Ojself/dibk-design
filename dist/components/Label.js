"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Label = props => {
  let labelProps = {
    ...props
  };
  const htmlTag = props.htmlTag?.length ? props.htmlTag : "label";
  delete labelProps.inline;
  delete labelProps.normalCursor;
  delete labelProps.htmlTag;
  const className = `${_LabelModule.default.label} ${props.inline ? _LabelModule.default.inline : ""} ${props.normalCursor ? _LabelModule.default.normalCursor : ""}`;
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