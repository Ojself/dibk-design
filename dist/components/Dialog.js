"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Dialog = function Dialog(props) {
  var wrapperRef = (0, _react.useRef)();
  var hiddenInputWrapperRef = (0, _react.useRef)();
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
      if (wrapperRef !== null && wrapperRef !== void 0 && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);
    hiddenInputWrapperRef.current.tabIndex = -1;
  }, [props]);
  return _react.default.createElement("div", {
    className: "".concat(_DialogModule.default.dialogOverlay, " ").concat(props.hidden && _DialogModule.default.hidden)
  }, _react.default.createElement("div", {
    ref: wrapperRef,
    className: "".concat(_DialogModule.default.dialogContent, " ").concat(props.noPadding ? _DialogModule.default.noPadding : ""),
    style: {
      maxWidth: props.maxWidth
    }
  }, props.closeButton ? _react.default.createElement("button", {
    onClick: props.onClickOutside,
    className: _DialogModule.default.closeButton
  }) : "", _react.default.createElement("input", {
    type: "button",
    ref: hiddenInputWrapperRef,
    className: _DialogModule.default.hidden,
    autoFocus: true
  }), props.children));
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