"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _StepModule = _interopRequireDefault(require("./Step.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Dependencies
// Stylesheets
class Step extends _react.Component {
  getActiveClass() {
    return this.props.activeStepId === this.props.step.id ? _StepModule.default.active : '';
  }

  getFinishedClass() {
    return this.props.step.finished ? _StepModule.default.finished : '';
  }

  getErrorClass() {
    return this.props.step.hasErrors ? _StepModule.default.hasErrors : '';
  }

  render() {
    const step = this.props.step;
    return step.link && Object.keys(step.link).length ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: step.link,
      className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(this.getActiveClass(), " ").concat(this.getFinishedClass(), " ").concat(this.getErrorClass())
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.wizardTopnavItemContent
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.stepNumber
    }, this.props.index + 1), /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.stepName
    }, this.props.step.name))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(this.getActiveClass(), " ").concat(this.getFinishedClass(), " ").concat(this.getErrorClass())
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.wizardTopnavItemContent
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.stepNumber
    }, this.props.index + 1), /*#__PURE__*/_react.default.createElement("span", {
      className: _StepModule.default.stepName
    }, this.props.step.name)));
  }

}

Step.propTypes = {
  step: _propTypes.default.object.isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  index: _propTypes.default.number.isRequired
};
var _default = Step;
exports.default = _default;