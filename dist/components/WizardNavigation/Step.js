"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _helpers = require("../../functions/helpers");
var _StepModule = _interopRequireDefault(require("./Step.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: _StepModule.default.stepNumber
    }, index + 1), _react.default.createElement("span", {
      className: _StepModule.default.stepName
    }, step.name));
  };
  var step = props.step,
    index = props.index,
    activeStepId = props.activeStepId;
  return _react.default.createElement("li", {
    className: (0, _helpers.classNameArrayToClassNameString)([_StepModule.default.wizardTopnavItem, getActiveClass(step), getFinishedClass(step), getErrorClass(step)])
  }, step.link && Object.keys(step.link).length ? _react.default.createElement(_reactRouterDom.Link, {
    to: step.link,
    "aria-current": activeStepId === step.id ? "step" : null,
    className: _StepModule.default.wizardTopnavItemContent
  }, renderStepContent(step, index)) : _react.default.createElement("span", {
    "aria-current": activeStepId === step.id ? "step" : null,
    className: _StepModule.default.wizardTopnavItemContent
  }, renderStepContent(step, index)));
};
Step.propTypes = {
  step: _propTypes.default.object.isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  index: _propTypes.default.number.isRequired
};
var _default = Step;
exports.default = _default;