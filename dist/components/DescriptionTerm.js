"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _DescriptionTermModule = _interopRequireDefault(require("./DescriptionTerm.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DescriptionTerm = _ref => {
  let {
    compact,
    titleWidth,
    children
  } = _ref;
  return _react.default.createElement("dt", {
    className: (0, _helpers.classNameArrayToClassNameString)([_DescriptionTermModule.default.descriptionTerm, compact && _DescriptionTermModule.default.compact]),
    style: {
      "--title-width": titleWidth || null
    }
  }, children);
};
DescriptionTerm.propTypes = {
  compact: _propTypes.default.bool,
  titleWidth: _propTypes.default.string
};
DescriptionTerm.defaultProps = {
  compact: false
};
var _default = exports.default = DescriptionTerm;