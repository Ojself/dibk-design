"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _StepModule = _interopRequireDefault(require("./Step.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = function Step(props) {
  var getActiveClass = function getActiveClass() {
    return props.activeStepId === props.step.id ? _StepModule.default.active : "";
  };
  var getFinishedClass = function getFinishedClass() {
    return props.step.finished ? _StepModule.default.finished : "";
  };
  var getErrorClass = function getErrorClass() {
    return props.step.hasErrors ? _StepModule.default.hasErrors : "";
  };
  var step = props.step;
  return step.link && Object.keys(step.link).length ? _react.default.createElement(_reactRouterDom.Link, {
    to: step.link,
    className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(getActiveClass(), " ").concat(getFinishedClass(), " ").concat(getErrorClass())
  }, _react.default.createElement("span", {
    className: _StepModule.default.wizardTopnavItemContent
  }, _react.default.createElement("span", {
    className: _StepModule.default.stepNumber
  }, props.index + 1), _react.default.createElement("span", {
    className: _StepModule.default.stepName
  }, props.step.name))) : _react.default.createElement("div", {
    className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(getActiveClass(), " ").concat(getFinishedClass(), " ").concat(getErrorClass())
  }, _react.default.createElement("span", {
    className: _StepModule.default.wizardTopnavItemContent
  }, _react.default.createElement("span", {
    className: _StepModule.default.stepNumber
  }, props.index + 1), _react.default.createElement("span", {
    className: _StepModule.default.stepName
  }, props.step.name)));
};
Step.propTypes = {
  step: _propTypes.default.object.isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  index: _propTypes.default.number.isRequired
};
var _default = Step;
exports.default = _default;