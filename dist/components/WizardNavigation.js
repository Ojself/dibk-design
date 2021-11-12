"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Step = _interopRequireDefault(require("./WizardNavigation/Step"));

var _WizardNavigationModule = _interopRequireDefault(require("./WizardNavigation.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Dependencies
// Components
// Stylesheets
class WizardNavigation extends _react.Component {
  renderSteps(steps, activeStepId) {
    const hasSteps = steps && Object.keys(steps).length;
    return hasSteps ? Object.keys(steps).map((stepKey, stepIndex) => {
      const step = steps[stepKey];
      return /*#__PURE__*/_react.default.createElement(_Step.default, {
        step: step,
        activeStepId: activeStepId,
        index: stepIndex,
        key: stepKey
      });
    }) : '';
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _WizardNavigationModule.default.wizardTopnav
    }, this.renderSteps(this.props.steps, this.props.activeStepId));
  }

}

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