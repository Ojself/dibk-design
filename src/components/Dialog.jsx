// Dependencies
import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Assets
import xSymbol from '../assets/svg/x-symbol.svg?url';

// Stylesheets
import style from './Dialog.module.scss';
import {
  addFocusTrapInsideElement,
  classNameArrayToClassNameString,
} from '../functions/helpers';

const Dialog = (props) => {
  //const dialogContentRef = useRef();
  const dialogRef = useRef();
  const dialogContainerRef = useRef();

  const dialogContentRef = useCallback((element) => {
    if (!!element) {
      addFocusTrapInsideElement(element);
    }
    return element;
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const keyDownFunction = (event) => {
      if (event.keyCode === 27 && props.onClickOutside) {
        props.onClickOutside();
      }
    };
    const handleClickOutside = (event) => {
      if (
        dialogContainerRef?.current &&
        !dialogContainerRef.current.contains(event.target)
      ) {
        props.onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', keyDownFunction, false);
  }, [props, dialogContainerRef]);

  useEffect(() => {
    dialogRef.current.close();
    if (!props.hidden) {
      props.modal ? dialogRef.current.showModal() : dialogRef.current.show();
    }
  }, [dialogRef, props.hidden, props.modal]);

  const sideBarClassNames =
    props.attachTo?.length &&
    classNameArrayToClassNameString([style.isSidebar, style[props.attachTo]]);
  const dialogContentStyleProps = {
    '--max-width': props?.maxWidth?.length && props.maxWidth,
  };

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
            props.noPadding && style.noPadding,
          ])}
        >
          {props.closeButton ? (
            <button
              aria-label="Lukk dialog"
              onClick={props.onClickOutside}
              className={classNameArrayToClassNameString([
                style.closeButton,
                props.noPadding && style.noPadding,
              ])}
            >
              <img src={xSymbol} alt="" />
            </button>
          ) : null}
          <div aria-live="assertive" role="dialog">
            {props.children}
          </div>
        </div>
      </div>
    </dialog>
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
  onClickOutside: PropTypes.func.isRequired,
  modal: PropTypes.bool,
};

Dialog.defaultProps = {
  maxWidth: 'none',
  modal: false,
};

export default Dialog;
