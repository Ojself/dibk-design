// Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Helpers
import { classNameArrayToClassNameString } from "../../functions/helpers";

// Stylesheets
import style from "./Step.module.scss";

const Step = (props) => {
    const getActiveClass = (step) => {
        return props.activeStepId === step.id ? style.active : "";
    };

    const getFinishedClass = (step) => {
        return step.finished ? style.finished : "";
    };

    const getErrorClass = (step) => {
        return step.hasErrors ? style.hasErrors : "";
    };

    const renderStepContent = (step, index) => {
        return (
            <span className={style.wizardTopnavItemContent}>
                <span className={style.stepNumber}>{index + 1}</span>
                <span className={style.stepName}>{step.name}</span>
            </span>
        );
    };

    const { step, index } = props;

    return (
        <li
            className={classNameArrayToClassNameString([
                style.wizardTopnavItem,
                getActiveClass(step),
                getFinishedClass(step),
                getErrorClass(step)
            ])}
        >
            {step.link && Object.keys(step.link).length ? (
                <Link to={step.link} aria-current={props.activeStepId === props.step.id ? "step" : null}>
                    {renderStepContent(step, index)}
                </Link>
            ) : (
                renderStepContent(step, index)
            )}
        </li>
    );
};

Step.propTypes = {
    step: PropTypes.object.isRequired,
    activeStepId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired
};

export default Step;
