import { useCallback, useEffect, useRef } from "react";
import xSymbol from "../assets/svg/x-symbol.svg?url";
import {
  addFocusTrapInsideElement,
  classNameArrayToClassNameString,
} from "../functions/helpers";
import style from "./Dialog.module.scss";

export interface DialogProps {
  maxWidth?: string;
  noPadding?: boolean;
  closeButton?: boolean;
  onClickOutside: () => void;
  modal?: boolean;
  attachTo?: "left" | "right" | "top" | "bottom" | string;
  hidden?: boolean;
  children?: React.ReactNode;
}

const Dialog = ({
  maxWidth = "none",
  noPadding,
  closeButton,
  onClickOutside,
  modal = true,
  attachTo,
  hidden = false,
  children,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogContainerRef = useRef<HTMLDivElement>(null);

  const dialogContentRef = useCallback(
    (element: HTMLDivElement | null): void => {
      if (element) {
        addFocusTrapInsideElement(element);
      }
    },
    [],
  );

  useEffect(() => {
    const keyDownFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClickOutside) {
        onClickOutside();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogContainerRef.current &&
        !dialogContainerRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyDownFunction, false);
    };
  }, [onClickOutside]);

  useEffect(() => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
    if (!hidden) {
      modal ? dialogRef.current.showModal() : dialogRef.current.show();
    }
  }, [hidden, modal]);

  const sideBarClassNames =
    attachTo &&
    classNameArrayToClassNameString([style.isSidebar, style[attachTo]]);
  const dialogContentStyleProps = {
    "--max-width": maxWidth,
  } as React.CSSProperties;

  return (
    <dialog
      className={classNameArrayToClassNameString([
        style.dialog,
        sideBarClassNames,
      ])}
      ref={dialogRef}
    >
      <div
        ref={dialogContainerRef}
        className={style.dialogContainer}
        style={dialogContentStyleProps}
      >
        <div
          ref={dialogContentRef}
          className={classNameArrayToClassNameString([
            style.dialogContent,
            noPadding && style.noPadding,
          ])}
        >
          {closeButton && (
            <button
              type="button"
              aria-label="Lukk dialog"
              onClick={onClickOutside}
              className={classNameArrayToClassNameString([
                style.closeButton,
                noPadding && style.noPadding,
              ])}
            >
              <img src={xSymbol} alt="" />
            </button>
          )}
          <div aria-live="assertive" role="dialog">
            {children}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
