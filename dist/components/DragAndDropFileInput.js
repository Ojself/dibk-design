"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("./Button"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _Label = _interopRequireDefault(require("./Label"));
var _DragAndDropFileInputModule = _interopRequireDefault(require("./DragAndDropFileInput.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DragAndDropFileInput = function DragAndDropFileInput(props) {
  var _props$errorMessage, _props$ariaDescribed;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    highlight = _useState2[0],
    setHighlight = _useState2[1];
  var containerElementRef = (0, _react.useRef)();
  var fileInputElementRef = (0, _react.useRef)();
  var preventDefaults = function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  };
  var renderValueAsText = function renderValueAsText(value, defaultContent) {
    return value ? value : defaultContent;
  };
  var handleAddButtonOnClick = function handleAddButtonOnClick() {
    fileInputElementRef.current.click();
  };
  var getErrorElementId = function getErrorElementId() {
    return "".concat(props.id, "-errorMessage");
  };
  var inputElementProps = {
    "aria-describedby": props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null,
    "aria-invalid": props.hasErrors ? "true" : null,
    required: props.required
  };
  var buttonContent;
  if (props.selectedFileName) {
    buttonContent = props.buttonContentWhenSelectedFile ? props.buttonContentWhenSelectedFile : props.buttonContent;
  } else {
    buttonContent = props.buttonContent;
  }
  (0, _react.useEffect)(function () {
    var handleFiles = function handleFiles(files) {
      props.onDragAndDropChange(files);
    };
    var handleDrop = function handleDrop(e) {
      var files = e.dataTransfer.files;
      handleFiles(files);
    };
    if (containerElementRef !== null && containerElementRef !== void 0 && containerElementRef.current) {
      containerElementRef.current.addEventListener("dragenter", preventDefaults, false);
      containerElementRef.current.addEventListener("dragover", preventDefaults, false);
      containerElementRef.current.addEventListener("dragleave", preventDefaults, false);
      containerElementRef.current.addEventListener("drop", preventDefaults, false);
      containerElementRef.current.addEventListener("dragenter", function () {
        setHighlight(true);
      }, false);
      containerElementRef.current.addEventListener("dragover", function () {
        setHighlight(true);
      }, false);
      containerElementRef.current.addEventListener("dragleave", function () {
        setHighlight(false);
      }, false);
      containerElementRef.current.addEventListener("drop", function () {
        setHighlight(false);
      }, false);
      containerElementRef.current.addEventListener("drop", handleDrop, false);
    }
  }, [props]);
  return _react.default.createElement("div", {
    className: _DragAndDropFileInputModule.default.dragAndDropFileInput
  }, _react.default.createElement(_Label.default, {
    htmlFor: props.id
  }, props.label, props.required && _react.default.createElement("span", {
    className: _DragAndDropFileInputModule.default.requiredSymbol
  }, "*")), _react.default.createElement("div", null, props.children), !props.contentOnly ? _react.default.createElement("div", {
    ref: containerElementRef,
    className: "".concat(_DragAndDropFileInputModule.default.dragAndDropContainer, " ").concat(highlight ? _DragAndDropFileInputModule.default.highlighted : "")
  }, props.selectedFileName ? _react.default.createElement("div", null, _react.default.createElement("span", null, _react.default.createElement("b", null, "Valgt fil:"), " ", props.selectedFileName)) : _react.default.createElement("div", null, "Slipp fil her"), _react.default.createElement("input", _extends({}, inputElementProps, {
    ref: fileInputElementRef,
    type: "file",
    onChange: props.onSelectChange
  })), props.buttonContent ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, props.selectedFileName ? "" : "eller klikk på knappen for å velge fil"), _react.default.createElement(_Button.default, {
    size: "small",
    type: "button",
    color: props.buttonColor,
    onClick: function onClick() {
      return handleAddButtonOnClick();
    },
    content: buttonContent,
    hasErrors: props.hasErrors
  })) : null) : null, props.contentOnly ? _react.default.createElement("span", null, renderValueAsText(props.selectedFileName, props.defaultContent)) : "", _react.default.createElement(_ErrorMessage.default, {
    id: getErrorElementId(),
    content: props.errorMessage,
    theme: props.theme
  }));
};
DragAndDropFileInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  onSelectChange: _propTypes.default.func.isRequired,
  onDragAndDropChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  buttonContentWhenSelectedFile: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  required: _propTypes.default.bool,
  theme: _propTypes.default.object
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
var _default = DragAndDropFileInput;
exports.default = _default;