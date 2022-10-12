// Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Stylesheets
import style from "./Step.module.scss";

const Step = (props) => {
    const getActiveClass = () => {
        return props.activeStepId === props.step.id ? style.active : "";
    };

    const getFinishedClass = () => {
        return props.step.finished ? style.finished : "";
    };

    const getErrorClass = () => {
        return props.step.hasErrors ? style.hasErrors : "";
    };

    const step = props.step;
    return step.link && Object.keys(step.link).length ? (
        <Link
            to={step.link}
            className={`${style.wizardTopnavItem} ${getActiveClass()} ${getFinishedClass()} ${getErrorClass()}`}
        >
            <span className={style.wizardTopnavItemContent}>
                <span className={style.stepNumber}>{props.index + 1}</span>
                <span className={style.stepName}>{props.step.name}</span>
            </span>
        </Link>
    ) : (
        <div className={`${style.wizardTopnavItem} ${getActiveClass()} ${getFinishedClass()} ${getErrorClass()}`}>
            <span className={style.wizardTopnavItemContent}>
                <span className={style.stepNumber}>{props.index + 1}</span>
                <span className={style.stepName}>{props.step.name}</span>
            </span>
        </div>
    );
};

Step.propTypes = {
    step: PropTypes.object.isRequired,
    activeStepId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired
};

export default Step;
