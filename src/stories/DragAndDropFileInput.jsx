// Dependencies
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Components
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./DragAndDropFileInput.module.scss";

const DragAndDropFileInput = (props) => {
    // State
    const [highlight, setHighlight] = useState(false);

    // Refs
    const containerElementRef = useRef();
    const fileInputElementRef = useRef();

    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const renderValueAsText = (value, defaultContent) => {
        return value ? value : defaultContent;
    };

    const handleAddButtonOnClick = () => {
        fileInputElementRef.current.click();
    };

    const getErrorElementId = () => {
        return `${props.id}-errorMessage`;
    };

    const inputElementProps = {
        "aria-describedby":
            props.hasErrors && !!props.errorMessage?.length
                ? getErrorElementId()
                : !!props["aria-describedby"]?.length
                ? props["aria-describedby"]
                : null,
        "aria-invalid": props.hasErrors ? "true" : null,
        "data-transaction-name": props["data-transaction-name-for-input"],
        required: props.required
    };

    let buttonContent;
    if (props.selectedFileName) {
        buttonContent = props.buttonContentWhenSelectedFile ? props.buttonContentWhenSelectedFile : props.buttonContent;
    } else {
        buttonContent = props.buttonContent;
    }

    useEffect(() => {
        const handleFiles = (files) => {
            props.onDragAndDropChange(files);
        };

        const handleDrop = (e) => {
            const files = e.dataTransfer.files;
            handleFiles(files);
        };

        if (containerElementRef?.current) {
            // Prevent defaults
            containerElementRef.current.addEventListener("dragenter", preventDefaults, false);
            containerElementRef.current.addEventListener("dragover", preventDefaults, false);
            containerElementRef.current.addEventListener("dragleave", preventDefaults, false);
            containerElementRef.current.addEventListener("drop", preventDefaults, false);

            // Highlight
            containerElementRef.current.addEventListener(
                "dragenter",
                () => {
                    setHighlight(true);
                },
                false
            );
            containerElementRef.current.addEventListener(
                "dragover",
                () => {
                    setHighlight(true);
                },
                false
            );

            // Unhighlight
            containerElementRef.current.addEventListener(
                "dragleave",
                () => {
                    setHighlight(false);
                },
                false
            );
            containerElementRef.current.addEventListener(
                "drop",
                () => {
                    setHighlight(false);
                },
                false
            );

            // Hande drop
            containerElementRef.current.addEventListener("drop", handleDrop, false);
        }
    }, [props]);

    return (
        <div className={style.dragAndDropFileInput}>
            <Label htmlFor={props.id}>
                {props.label}
                {props.required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
            </Label>
            <div>{props.children}</div>
            {!props.contentOnly ? (
                <div
                    ref={containerElementRef}
                    className={`${style.dragAndDropContainer} ${highlight ? style.highlighted : ""}`}
                >
                    {props.selectedFileName ? (
                        <div>
                            <span>
                                <b>Valgt fil:</b> {props.selectedFileName}
                            </span>
                        </div>
                    ) : (
                        <div>Slipp fil her</div>
                    )}
                    <input
                        {...inputElementProps}
                        ref={fileInputElementRef}
                        type="file"
                        onChange={props.onSelectChange}
                    />
                    {props.buttonContent ? (
                        <React.Fragment>
                            <div>{props.selectedFileName ? "" : "eller klikk på knappen for å velge fil"}</div>
                            <Button
                                size="small"
                                type="button"
                                color={props.buttonColor}
                                onClick={() => handleAddButtonOnClick()}
                                content={buttonContent}
                                hasErrors={props.hasErrors}
                                data-transaction-name={props["data-transaction-name-for-button"]}
                            />
                        </React.Fragment>
                    ) : null}
                </div>
            ) : null}

            {props.contentOnly ? <span>{renderValueAsText(props.selectedFileName, props.defaultContent)}</span> : ""}
            <ErrorMessage id={getErrorElementId()} content={props.errorMessage} theme={props.theme} />
        </div>
    );
};

DragAndDropFileInput.propTypes = {
    /** Text content inside list item */
    id: PropTypes.string.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onDragAndDropChange: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    contentOnly: PropTypes.bool,
    buttonColor: PropTypes.string,
    buttonContent: PropTypes.string,
    buttonContentWhenSelectedFile: PropTypes.string,
    selectedFileName: PropTypes.string,
    defaultContent: PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    required: PropTypes.bool,
    "data-transaction-name-for-button": PropTypes.string,
    "data-transaction-name-for-input": PropTypes.string,
    theme: PropTypes.object
};

DragAndDropFileInput.defaultProps = {
    label: "",
    contentOnly: false,
    buttonColor: "default",
    defaultContent: "",
    hasErrors: false,
    errorMessage: "",
    required: false
};

export default DragAndDropFileInput;
