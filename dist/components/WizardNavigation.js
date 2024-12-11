"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Step = _interopRequireDefault(require("./WizardNavigation/Step"));
var _helpers = require("../functions/helpers");
var _WizardNavigationModule = _interopRequireDefault(require("./WizardNavigation.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WizardNavigation = props => {
  var _Object$keys, _props$ariaLabel;
  const renderSteps = (steps, activeStepId) => {
    const hasSteps = steps && Object.keys(steps).length;
    return hasSteps ? Object.keys(steps).map((stepKey, stepIndex) => {
      const step = steps[stepKey];
      return _react.default.createElement(_Step.default, {
        direction: props.direction,
        step: step,
        activeStepId: activeStepId,
        index: stepIndex,
        key: stepKey
      });
    }) : null;
  };
  const amountOfSteps = props.steps && (_Object$keys = Object.keys(props.steps)) !== null && _Object$keys !== void 0 && _Object$keys.length ? Object.keys(props.steps).length : 0;
  const defaultAriaLabel = "I dette skjemaet er det totalt ".concat(amountOfSteps, " steg som du skal g\xE5 igjennom");
  const ariaLabel = (_props$ariaLabel = props["aria-label"]) !== null && _props$ariaLabel !== void 0 && _props$ariaLabel.length ? props["aria-label"] : defaultAriaLabel;
  return _react.default.createElement("nav", {
    "aria-label": ariaLabel,
    className: (0, _helpers.classNameArrayToClassNameString)([_WizardNavigationModule.default.wizardTopnavContainer, _WizardNavigationModule.default[props.direction]])
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
  "aria-label": _propTypes.default.string,
  direction: _propTypes.default.oneOf(["vertical", "horizontal"])
};
WizardNavigation.defaultProps = {
  direction: "vertical"
};
var _default = exports.default = WizardNavigation;