"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("./Button"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _Label = _interopRequireDefault(require("./Label"));
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _DragAndDropFileInputModule = _interopRequireDefault(require("./DragAndDropFileInput.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DragAndDropFileInput = props => {
  var _props$errorMessage, _props$ariaDescribed;
  const [highlight, setHighlight] = (0, _react.useState)(false);
  const containerElementRef = (0, _react.useRef)();
  const fileInputElementRef = (0, _react.useRef)();
  const preventDefaults = e => {
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
    return "".concat(props.id, "-errorMessage");
  };
  const inputElementProps = {
    id: props.id,
    "aria-describedby": props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null,
    "aria-invalid": props.hasErrors ? "true" : null,
    name: props.name,
    required: props.required
  };
  let buttonContent;
  if (props.selectedFileName) {
    buttonContent = props.buttonContentWhenSelectedFile ? props.buttonContentWhenSelectedFile : props.buttonContent;
  } else {
    buttonContent = props.buttonContent;
  }
  (0, _react.useEffect)(() => {
    const handleFiles = files => {
      props.onDragAndDropChange(files);
    };
    const handleDrop = e => {
      const files = e.dataTransfer.files;
      handleFiles(files);
    };
    if (containerElementRef !== null && containerElementRef !== void 0 && containerElementRef.current) {
      containerElementRef.current.addEventListener("dragenter", preventDefaults, false);
      containerElementRef.current.addEventListener("dragover", preventDefaults, false);
      containerElementRef.current.addEventListener("dragleave", preventDefaults, false);
      containerElementRef.current.addEventListener("drop", preventDefaults, false);
      containerElementRef.current.addEventListener("dragenter", () => {
        setHighlight(true);
      }, false);
      containerElementRef.current.addEventListener("dragover", () => {
        setHighlight(true);
      }, false);
      containerElementRef.current.addEventListener("dragleave", () => {
        setHighlight(false);
      }, false);
      containerElementRef.current.addEventListener("drop", () => {
        setHighlight(false);
      }, false);
      containerElementRef.current.addEventListener("drop", handleDrop, false);
    }
  }, [props]);
  return _react.default.createElement("div", {
    className: _DragAndDropFileInputModule.default.dragAndDropFileInput
  }, _react.default.createElement(_Label.default, {
    htmlFor: props.id
  }, props.label, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _DragAndDropFileInputModule.default.requiredSymbol
  })), _react.default.createElement("div", null, props.children), !props.contentOnly ? _react.default.createElement("div", {
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
    onClick: () => handleAddButtonOnClick(),
    content: buttonContent,
    hasErrors: props.hasErrors,
    "data-transaction-name": props["data-transaction-name"]
  })) : null) : null, props.contentOnly ? _react.default.createElement("span", null, renderValueAsText(props.selectedFileName, props.defaultContent)) : "", _react.default.createElement(_ErrorMessage.default, {
    id: getErrorElementId(),
    content: props.errorMessage
  }));
};
DragAndDropFileInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
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
  "data-transaction-name": _propTypes.default.string
};
DragAndDropFileInput.defaultProps = {
  label: "",
  contentOnly: false,
  buttonColor: "primary",
  defaultContent: "",
  hasErrors: false,
  errorMessage: "",
  required: false
};
var _default = exports.default = DragAndDropFileInput;