import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import style from "./Dialog.module.scss";

const Dialog = (props) => {

    // Refs
    const wrapperRef = useRef();
    const hiddenInputWrapperRef = useRef();

    useEffect(() => {
        const keyDownFunction = (event) => {
            switch (event.keyCode) {
                case 27: // Escape
                    if (props.onClickOutside) props.onClickOutside();
                    break;
                default:
                    return null;
            }
        };
        const handleClickOutside = (event) => {
            if (wrapperRef?.current && !wrapperRef.current.contains(event.target)) {
                props.onClickOutside();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", keyDownFunction, false);
        hiddenInputWrapperRef.current.tabIndex = -1;
    }, [props.onClickOutside]);

    return (
        <div className={`${style.dialogOverlay} ${props.hidden && style.hidden}`}>
            <div
                ref={wrapperRef}
                className={`${style.dialogContent} ${props.noPadding ? style.noPadding : ""}`}
                style={{ maxWidth: props.maxWidth }}
            >
                {props.closeButton ? (
                    <button onClick={props.onClickOutside} className={style.closeButton}></button>
                ) : (
                    ""
                )}
                <input type="button" ref={hiddenInputWrapperRef} className={style.hidden} autoFocus />
                {props.children}
            </div>
        </div>
    );
};

Dialog.propTypes = {
    /** Sets max width for modal content element */
    maxWidth: PropTypes.string,
    /** Removes padding from modal content element */
    noPadding: PropTypes.bool,
    /** Displays close button in upper right corner */
    closeButton: PropTypes.bool,
    /** Function for click outside modal content element or click on close button element */
    onClickOutside: PropTypes.func.isRequired
};

Dialog.defaultProps = {
    maxWidth: "none"
};

export default Dialog;
