// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Step from "./WizardNavigation/Step";

// Helpers
import { classNameArrayToClassNameString } from "../functions/helpers";

// Stylesheets
import style from "./WizardNavigation.module.scss";

const WizardNavigation = (props) => {
    const renderSteps = (steps, activeStepId) => {
        const hasSteps = steps && Object.keys(steps).length;
        return hasSteps
            ? Object.keys(steps).map((stepKey, stepIndex) => {
                  const step = steps[stepKey];
                  return (
                      <Step
                          direction={props.direction}
                          step={step}
                          activeStepId={activeStepId}
                          index={stepIndex}
                          key={stepKey}
                      />
                  );
              })
            : null;
    };
    const amountOfSteps = props.steps && Object.keys(props.steps)?.length ? Object.keys(props.steps).length : 0;
    const defaultAriaLabel = `I dette skjemaet er det totalt ${amountOfSteps} steg som du skal gå igjennom`;
    const ariaLabel = props["aria-label"]?.length ? props["aria-label"] : defaultAriaLabel;
    return (
        <nav
            aria-label={ariaLabel}
            className={classNameArrayToClassNameString([style.wizardTopnavContainer, style[props.direction]])}
        >
            <ol className={style.wizardTopnav}>{renderSteps(props.steps, props.activeStepId)}</ol>
        </nav>
    );
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
    activeStepId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    "aria-label": PropTypes.string,
    direction: PropTypes.oneOf(["vertical", "horizontal"])
};

WizardNavigation.defaultProps = {
    direction: "vertical"
};

export default WizardNavigation;
