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
  var _Object$keys, _props$ariaLabel;
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
  var amountOfSteps = props.steps && (_Object$keys = Object.keys(props.steps)) !== null && _Object$keys !== void 0 && _Object$keys.length ? Object.keys(props.steps).length : 0;
  var defaultAriaLabel = "I dette skjemaet er det totalt ".concat(amountOfSteps, " steg som du skal g\xE5 igjennom");
  var ariaLabel = (_props$ariaLabel = props["aria-label"]) !== null && _props$ariaLabel !== void 0 && _props$ariaLabel.length ? props["aria-label"] : defaultAriaLabel;
  return _react.default.createElement("nav", {
    "aria-label": ariaLabel
  }, _react.default.createElement("ol", {
    className: _WizardNavigationModule.default.wizardTopnav
  }, renderSteps(props.steps, props.activeStepId)));
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
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  "aria-label": _propTypes.default.string
};
var _default = WizardNavigation;
exports.default = _default;