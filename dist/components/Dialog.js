"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Dialog extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setHiddenInputWrapperRef = this.setHiddenInputWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.keyDownFunction = this.keyDownFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener("keydown", this.keyDownFunction, false);
    this.hiddenInputWrapperRef.tabIndex = -1;
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener("keydown", this.keyDownFunction, false);
  }

  keyDownFunction(event) {
    switch (event.keyCode) {
      case 27:
        // Escape
        if (this.props.onClickOutside) this.props.onClickOutside();
        break;

      default:
        return null;
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setHiddenInputWrapperRef(node) {
    this.hiddenInputWrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickOutside();
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _DialogModule.default.dialogOverlay
    }, /*#__PURE__*/_react.default.createElement("div", {
      ref: this.setWrapperRef,
      className: "".concat(_DialogModule.default.dialogContent, " ").concat(this.props.noPadding ? _DialogModule.default.noPadding : ''),
      style: {
        maxWidth: this.props.maxWidth
      }
    }, this.props.closeButton ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.props.onClickOutside,
      className: _DialogModule.default.closeButton
    }) : '', /*#__PURE__*/_react.default.createElement("input", {
      type: "button",
      ref: this.setHiddenInputWrapperRef,
      className: _DialogModule.default.hidden,
      autoFocus: true
    }), this.props.children));
  }

}

;
Dialog.propTypes = {
  /** Sets max width for modal content element */
  maxWidth: _propTypes.default.string,

  /** Removes padding from modal content element */
  noPadding: _propTypes.default.bool,

  /** Displays close button in upper right corner */
  closeButton: _propTypes.default.bool,

  /** Function for click outside modal content element or click on close button element */
  onClickOutside: _propTypes.default.func.isRequired
};
Dialog.defaultProps = {
  maxWidth: 'none'
};
var _default = Dialog;
exports.default = _default;