"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Step = _interopRequireDefault(require("./WizardNavigation/Step"));
var _WizardNavigationModule = _interopRequireDefault(require("./WizardNavigation.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WizardNavigation = function WizardNavigation(props) {
  var renderSteps = function renderSteps(steps, activeStepId) {
    var hasSteps = steps && Object.keys(steps).length;
    return hasSteps ? Object.keys(steps).map(function (stepKey, stepIndex) {
      var step = steps[stepKey];
      return _react.default.createElement(_Step.default, {
        step: step,
        activeStepId: activeStepId,
        index: stepIndex,
        key: stepKey
      });
    }) : null;
  };
  return _react.default.createElement("div", {
    className: _WizardNavigationModule.default.wizardTopnav
  }, renderSteps(props.steps, props.activeStepId));
};
WizardNavigation.propTypes = {
  steps: _propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    name: _propTypes.default.string,
    finished: _propTypes.default.bool,
    hasErrors: _propTypes.default.bool,
    link: _propTypes.default.shape({
      to: _propTypes.default.object,
      reactLink: _propTypes.default.bool
    })
  }).isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = WizardNavigation;
exports.default = _default;