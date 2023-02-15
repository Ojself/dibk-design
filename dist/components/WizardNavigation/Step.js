"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _helpers = require("../../functions/helpers");
var _StepModule = _interopRequireDefault(require("./Step.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Step = function Step(props) {
  var getActiveClass = function getActiveClass(step) {
    return props.activeStepId === step.id ? _StepModule.default.active : "";
  };
  var getFinishedClass = function getFinishedClass(step) {
    return step.finished ? _StepModule.default.finished : "";
  };
  var getErrorClass = function getErrorClass(step) {
    return step.hasErrors ? _StepModule.default.hasErrors : "";
  };
  var renderStepContent = function renderStepContent(step, index) {
    return _react.default.createElement("span", {
      className: _StepModule.default.wizardTopnavItemContent
    }, _react.default.createElement("span", {
      className: _StepModule.default.stepNumber
    }, index + 1), _react.default.createElement("span", {
      className: _StepModule.default.stepName
    }, step.name));
  };
  var step = props.step,
    index = props.index;
  return _react.default.createElement("li", {
    className: (0, _helpers.classNameArrayToClassNameString)([_StepModule.default.wizardTopnavItem, getActiveClass(step), getFinishedClass(step), getErrorClass(step)])
  }, step.link && Object.keys(step.link).length ? _react.default.createElement(_reactRouterDom.Link, {
    to: step.link,
    "aria-current": props.activeStepId === props.step.id ? "step" : null
  }, renderStepContent(step, index)) : renderStepContent(step, index));
};
Step.propTypes = {
  step: _propTypes.default.object.isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  index: _propTypes.default.number.isRequired
};
var _default = Step;
exports.default = _default;