// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./ErrorMessage.module.scss";

// Assets
import errorSign from "../assets/svg/error-sign.svg?url";

const ErrorMessage = (props) => {
    const getErrorElementProps = () => {
        return {
            id: !!props.id?.length ? props.id : null,
            className: style.errorMessage
        };
    };
    return props?.content?.length ? (
        <span aria-live="polite" {...getErrorElementProps()}>
            <img src={errorSign} alt="" className={style.errorSign} />
            {props.content}
        </span>
    ) : null;
};

ErrorMessage.propTypes = {
    id: PropTypes.string,
    /** Text content inside error message */
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ])
};

ErrorMessage.defaultProps = {
    content: ""
};

export default ErrorMessage;
