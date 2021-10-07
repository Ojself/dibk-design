import React from 'react';
import PropTypes from 'prop-types';
import style from './Dialog.module.scss';

class Dialog extends React.Component {

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
            case 27: // Escape
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
        return (<div className={style.dialogOverlay}>
            <div ref={this.setWrapperRef} className={`${style.dialogContent} ${this.props.noPadding ? style.noPadding : ''}`} style={{ maxWidth: this.props.maxWidth }}>
                {
                    this.props.closeButton
                        ? (
                            <button onClick={this.props.onClickOutside} className={style.closeButton}>
                                Lukk
                            </button>
                        )
                        : ''
                }
                <input type="button" ref={this.setHiddenInputWrapperRef} className={style.hidden} autoFocus />
                {this.props.children}
            </div>
        </div>)
    }
};

Dialog.propTypes = {
    /** Sets max width for modal content element */
    maxWidth: PropTypes.string,
    /** Removes padding from modal content element */
    noPadding: PropTypes.bool,
    /** Displays close button in upper right corner */
    closeButton: PropTypes.bool,
    /** Function for click outside modal content element or click on close button element */
    onClickOutside: PropTypes.func.isRequired
};

Dialog.defaultProps = {
    maxWidth: 'none'
};

export default Dialog;