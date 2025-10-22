import type React from "react";
import type { JSX } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import asterisk from "../assets/svg/asterisk.svg?url";
import Button, { type ButtonColor } from "./Button";
import style from "./DragAndDropFileInput.module.scss";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

export interface DragAndDropFileInputProps {
  id: string;
  name?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDragAndDropChange: (files: FileList) => void;
  label?: string | (string | JSX.Element)[];
  contentOnly?: boolean;
  buttonColor?: ButtonColor;
  buttonContent?: string;
  buttonContentWhenSelectedFile?: string;
  selectedFileName?: string;
  defaultContent?: string;
  hasErrors?: boolean;
  errorMessage?: string | (string | JSX.Element)[];
  required?: boolean;
  children?: React.ReactNode;
  "data-transaction-name"?: string;
}

const DragAndDropFileInput = ({
  id,
  name,
  onSelectChange,
  onDragAndDropChange,
  label = "",
  contentOnly = false,
  buttonColor = "primary",
  buttonContent,
  buttonContentWhenSelectedFile,
  selectedFileName,
  defaultContent = "",
  hasErrors = false,
  errorMessage = "",
  required = false,
  children,
  "data-transaction-name": transactionName,
}: DragAndDropFileInputProps) => {
  const [highlight, setHighlight] = useState(false);
  const containerElementRef = useRef<HTMLDivElement>(null);
  const fileInputElementRef = useRef<HTMLInputElement>(null);

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const renderValueAsText = (
    value?: string,
    fallback?: string,
  ): string | undefined => {
    return value ? value : fallback;
  };

  const handleAddButtonOnClick = () => {
    fileInputElementRef.current?.click();
  };

  const getErrorElementId = () => `${id}-errorMessage`;

  const inputElementProps: React.InputHTMLAttributes<HTMLInputElement> = {
    id,
    "aria-describedby":
      hasErrors && errorMessage?.toString().length
        ? getErrorElementId()
        : undefined,
    "aria-invalid": hasErrors ? "true" : undefined,
    name,
    required,
  };

  const buttonLabel = selectedFileName
    ? buttonContentWhenSelectedFile || buttonContent
    : buttonContent;

  const highlightOn = useCallback(() => setHighlight(true), []);
  const highlightOff = useCallback(() => setHighlight(false), []);
  const handleDrop = useCallback(
    (e: DragEvent) => {
      preventDefaults(e);
      if (e.dataTransfer?.files) {
        onDragAndDropChange(e.dataTransfer.files);
      }
      setHighlight(false);
    },
    [onDragAndDropChange],
  );

  useEffect(() => {
    const node = containerElementRef.current;
    if (!node) return;

    ["dragenter", "dragover"].forEach((eventName) =>{

      node.addEventListener(eventName, highlightOn)
    });
    ["dragleave", "drop"].forEach((eventName) =>{

      node.addEventListener(eventName, highlightOff)
    });

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) =>{

      node.addEventListener(eventName, preventDefaults)
    });

    node.addEventListener("drop", handleDrop);

    return () => {
      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        node.removeEventListener(eventName, preventDefaults);
        node.removeEventListener(eventName, highlightOn);
        node.removeEventListener(eventName, highlightOff);
      });
      node.removeEventListener("drop", handleDrop);
    };
  }, [onDragAndDropChange]);

  return (
    <div className={style.dragAndDropFileInput}>
      <Label htmlFor={id}>
        {label}
        {required && (
          <img src={asterisk} alt="" className={style.requiredSymbol} />
        )}
      </Label>

      <div>{children}</div>

      {!contentOnly && (
        <div
          ref={containerElementRef}
          className={`${style.dragAndDropContainer} ${
            highlight ? style.highlighted : ""
          }`}
        >
          {selectedFileName ? (
            <div>
              <span>
                <b>Valgt fil:</b> {selectedFileName}
              </span>
            </div>
          ) : (
            <div>Slipp fil her</div>
          )}
          <input
            {...inputElementProps}
            ref={fileInputElementRef}
            type="file"
            onChange={onSelectChange}
          />
          {buttonContent && (
            <>
              <div>
                {selectedFileName
                  ? ""
                  : "eller klikk på knappen for å velge fil"}
              </div>

              <Button
                size="small"
                inputType="button"
                color={buttonColor}
                onClick={handleAddButtonOnClick}
                content={buttonLabel}
                hasErrors={hasErrors}
                data-transaction-name={transactionName}
              />
            </>
          )}
        </div>
      )}

      {contentOnly && (
        <span>{renderValueAsText(selectedFileName, defaultContent)}</span>
      )}
      <ErrorMessage id={getErrorElementId()} content={errorMessage} />
    </div>
  );
};

export default DragAndDropFileInput;
