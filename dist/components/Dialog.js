"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _xSymbol = _interopRequireDefault(require("../assets/svg/x-symbol.svg?url"));
var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));
var _helpers = require("../functions/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Dialog = function Dialog(props) {
  var dialogRef = (0, _react.useRef)();
  var wrapperRef = (0, _react.useCallback)(function (element) {
    if (!!element) {
      (0, _helpers.addFocusTrapInsideElement)(element);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var keyDownFunction = function keyDownFunction(event) {
      switch (event.keyCode) {
        case 27:
          if (props.onClickOutside) props.onClickOutside();
          break;
        default:
          return null;
      }
    };
    var handleClickOutside = function handleClickOutside(event) {
      if (dialogRef !== null && dialogRef !== void 0 && dialogRef.current && !dialogRef.current.contains(event.target)) {
        props.onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);
  }, [props, wrapperRef]);
  return _react.default.createElement("div", {
    className: "".concat(_DialogModule.default.dialogOverlay, " ").concat(props.hidden && _DialogModule.default.hidden),
    ref: wrapperRef
  }, _react.default.createElement("div", {
    ref: dialogRef,
    className: "".concat(_DialogModule.default.dialogContent, " ").concat(props.noPadding ? _DialogModule.default.noPadding : ""),
    style: {
      maxWidth: props.maxWidth
    }
  }, props.closeButton ? _react.default.createElement("button", {
    "aria-label": "Lukk dialog",
    onClick: props.onClickOutside,
    className: _DialogModule.default.closeButton
  }, _react.default.createElement("img", {
    src: _xSymbol.default,
    alt: ""
  })) : null, _react.default.createElement("div", {
    "aria-live": "assertive",
    role: "dialog"
  }, props.children)));
};
Dialog.propTypes = {
  maxWidth: _propTypes.default.string,
  noPadding: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  onClickOutside: _propTypes.default.func.isRequired
};
Dialog.defaultProps = {
  maxWidth: "none"
};
var _default = Dialog;
exports.default = _default;