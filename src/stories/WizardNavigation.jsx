// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Step from "./WizardNavigation/Step";

// Stylesheets
import style from "./WizardNavigation.module.scss";

const WizardNavigation = (props) => {
    const renderSteps = (steps, activeStepId) => {
        const hasSteps = steps && Object.keys(steps).length;
        return hasSteps
            ? Object.keys(steps).map((stepKey, stepIndex) => {
                  const step = steps[stepKey];
                  return <Step step={step} activeStepId={activeStepId} index={stepIndex} key={stepKey} />;
              })
            : null;
    };
    return <div className={style.wizardTopnav}>{renderSteps(props.steps, props.activeStepId)}</div>;
};

WizardNavigation.propTypes = {
    steps: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        finished: PropTypes.bool,
        hasErrors: PropTypes.bool,
        link: PropTypes.shape({
            to: PropTypes.object,
            reactLink: PropTypes.bool
        })
    }).isRequired,
    activeStepId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default WizardNavigation;
