"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LeadModule = _interopRequireDefault(require("./Lead.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Lead = _ref => {
  let {
    id,
    htmlTag,
    children
  } = _ref;
  const leadClass = _LeadModule.default.lead;
  let leadElement = _react.default.createElement(htmlTag, {
    className: leadClass,
    id: id || null
  }, children);
  return leadElement;
};
Lead.propTypes = {
  id: _propTypes.default.string,
  htmlTag: _propTypes.default.string
};
Lead.defaultProps = {
  htmlTag: "p"
};
var _default = exports.default = Lead;