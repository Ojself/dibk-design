"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _DescriptionDetailsModule = _interopRequireDefault(require("./DescriptionDetails.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DescriptionDetails = _ref => {
  let {
    compact,
    titleWidth,
    children
  } = _ref;
  return _react.default.createElement("dd", {
    className: (0, _helpers.classNameArrayToClassNameString)([_DescriptionDetailsModule.default.descriptionDetails, compact && _DescriptionDetailsModule.default.compact]),
    style: {
      "--title-width": titleWidth || null
    }
  }, children);
};
DescriptionDetails.propTypes = {
  compact: _propTypes.default.bool,
  titleWidth: _propTypes.default.string
};
DescriptionDetails.defaultProps = {
  compact: false
};
var _default = exports.default = DescriptionDetails;