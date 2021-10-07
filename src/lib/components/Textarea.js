import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { getThemePaletteBackgroundColor } from '../functions/theme';
import style from './Textarea.module.scss';


class Textarea extends React.Component {
    getThemeErrorInputStyle(theme) {
        return {
            boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, 'warning')}`,
            borderColor: getThemePaletteBackgroundColor(theme, 'warning')
        }
    }
    getThemeErrorMessageStyle(theme) {
        return {
            color: getThemePaletteBackgroundColor(theme, 'warning')
        }
    }
    renderValueAsText(value, defaultContent) {
        return value
            ? value
            : defaultContent;
    }
    renderInputField() {
        const defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;
        const styleRules = {
            ...this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null,
            ...(this.props.width?.length && { width: this.props.width }),
            ...(this.props.resize?.length && { resize: this.props.resize }),
          };
        const props = {
            name: this.props.name,
            readOnly: this.props.readOnly,
            disabled: this.props.disabled,
            type: this.props.type,
            id: this.props.id,
            onChange: this.props.onChange,
            onBlur: this.props.onBlur,
            [defaultValue ? 'defaultValue' : 'value']: defaultValue || this.props.value,
            placeholder: this.props.placeholder,
            rows: this.props.rows,
            className: this.props.hasErrors ? style.hasErrors : '',
            'aria-required': this.props.mandatory,
            style: styleRules
        };

        return (
            <textarea {...props} />
        )
    }
    render() {
        return (<div className={style.textarea}>
            <Label htmlFor={this.props.id}>
                {this.props.label}
            </Label>
            {
                !this.props.contentOnly
                    ? this.renderInputField()
                    : <span>{this.renderValueAsText(this.props.value, this.props.defaultContent)}</span>
            }
            <span className={style.errorMessage} style={this.getThemeErrorMessageStyle(this.props.theme)}>{this.props.errorMessage ? this.props.errorMessage : ''}</span>
        </div>)
    }
}

Textarea.propTypes = {
    /** Text content inside list item */
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    resize: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    rows: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]))
    ]),
    contentOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultContent: PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]))
    ]),
    mandatory: PropTypes.bool,
    theme: PropTypes.object
};

Textarea.defaultProps = {
    name: '',
    type: 'text',
    label: '',
    contentOnly: false,
    placeholder: '',
    defaultContent: '',
    hasErrors: false,
    errorMessage: '',
    mandatory: false,
    onChange: () => { return false }
};

export default Textarea;
