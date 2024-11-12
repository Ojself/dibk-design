"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _xSymbol = _interopRequireDefault(require("../assets/svg/x-symbol.svg?url"));
var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));
var _helpers = require("../functions/helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Dialog = props => {
  const dialogRef = (0, _react.useRef)();
  const dialogContainerRef = (0, _react.useRef)();
  const dialogContentRef = (0, _react.useCallback)(element => {
    if (!!element) {
      (0, _helpers.addFocusTrapInsideElement)(element);
    }
    return element;
  }, []);
  (0, _react.useEffect)(() => {
    const keyDownFunction = event => {
      switch (event.keyCode) {
        case 27:
          if (props.onClickOutside) props.onClickOutside();
          break;
        default:
          return null;
      }
    };
    const handleClickOutside = event => {
      if (dialogContainerRef?.current && !dialogContainerRef.current.contains(event.target)) {
        props.onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);
  }, [props, dialogContainerRef]);
  (0, _react.useEffect)(() => {
    dialogRef.current.close();
    if (!props.hidden) {
      props.modal ? dialogRef.current.showModal() : dialogRef.current.show();
    }
  }, [dialogRef, props.hidden, props.modal]);
  const sideBarClassNames = props.attachTo?.length && (0, _helpers.classNameArrayToClassNameString)([_DialogModule.default.isSidebar, _DialogModule.default[props.attachTo]]);
  const dialogContentStyleProps = {
    "--max-width": props?.maxWidth?.length && props.maxWidth
  };
  return _react.default.createElement("dialog", {
    className: (0, _helpers.classNameArrayToClassNameString)([_DialogModule.default.dialog, sideBarClassNames]),
    ref: dialogRef
  }, _react.default.createElement("div", {
    ref: dialogContainerRef,
    className: _DialogModule.default.dialogContainer,
    style: dialogContentStyleProps
  }, _react.default.createElement("div", {
    ref: dialogContentRef,
    className: (0, _helpers.classNameArrayToClassNameString)([_DialogModule.default.dialogContent, props.noPadding && _DialogModule.default.noPadding])
  }, props.closeButton ? _react.default.createElement("button", {
    "aria-label": "Lukk dialog",
    onClick: props.onClickOutside,
    className: (0, _helpers.classNameArrayToClassNameString)([_DialogModule.default.closeButton, props.noPadding && _DialogModule.default.noPadding])
  }, _react.default.createElement("img", {
    src: _xSymbol.default,
    alt: ""
  })) : null, _react.default.createElement("div", {
    "aria-live": "assertive",
    role: "dialog"
  }, props.children))));
};
Dialog.propTypes = {
  maxWidth: _propTypes.default.string,
  noPadding: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  onClickOutside: _propTypes.default.func.isRequired,
  modal: _propTypes.default.bool
};
Dialog.defaultProps = {
  maxWidth: "none",
  modal: false
};
var _default = exports.default = Dialog;