// Dependencies
import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Assets
import xSymbol from "../assets/svg/x-symbol.svg?url";

// Stylesheets
import style from "./Dialog.module.scss";
import { addFocusTrapInsideElement } from "../functions/helpers";

const Dialog = (props) => {
    const dialogRef = useRef();

    const wrapperRef = useCallback((element) => {
        if (!!element) {
            addFocusTrapInsideElement(element);
        }
    }, []);

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
            if (dialogRef?.current && !dialogRef.current.contains(event.target)) {
                props.onClickOutside();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", keyDownFunction, false);
    }, [props, wrapperRef]);

    return (
        <div className={`${style.dialogOverlay} ${props.hidden && style.hidden}`} ref={wrapperRef}>
            <div
                ref={dialogRef}
                className={`${style.dialogContent} ${props.noPadding ? style.noPadding : ""}`}
                style={{ maxWidth: props.maxWidth }}
            >
                {props.closeButton ? (
                    <button aria-label="Lukk dialog" onClick={props.onClickOutside} className={style.closeButton}>
                        <img src={xSymbol} alt="" />
                    </button>
                ) : null}
                <div aria-live="assertive" role="dialog">
                    {props.children}
                </div>
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
