import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Label from './Label';
import DatePicker from 'react-datepicker';
import { registerLocale } from "react-datepicker";
import { format } from 'date-fns';
import nb from 'date-fns/locale/nb';
import { getThemePaletteBackgroundColor } from '../functions/theme';
import "react-datepicker/dist/react-datepicker.css";
import style from './InputField.module.scss';

registerLocale('nb', nb)

class InputField extends React.Component {
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
  convertDateToString(date) {
    return date ? format(new Date(date), this.props.dateFormat, { locale: nb }) : '';
  }
  renderValueAsText(value, defaultContent) {
    return this.props.type === 'date'
      ? value
        ? this.convertDateToString(value)
        : defaultContent
      : value
        ? value
        : defaultContent;
  }
  renderInputField() {
    const styleRules = {
      ...this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null,
      ...(this.props.width?.length && { width: this.props.width })
    };
    if (this.props.type === 'date') {
      const value = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
      const props = {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        id: this.props.id,
        dateFormat: this.props.dateFormat,
        locale: 'nb',
        selectsStart: this.props.selectsStart,
        selectsEnd: this.props.selectsEnd,
        startDate: this.props.startDate ? new Date(this.props.startDate) : null,
        endDate: this.props.endDate ? new Date(this.props.endDate) : null,
        onChange: this.props.onChange ? date => this.props.onChange(date) : console.log(`Missing onChange handler for date picker with id: ${this.props.id}`),
        onBlur: this.props.onBlur ? date => this.props.onBlur(date) : null,
        selected: value ? new Date(value) : null,
        placeholderText: this.props.placeholder,
        className: this.props.hasErrors ? style.hasErrors : '',
        style: styleRules
      }
      return <DatePicker {...props} />
    } else {
      const defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;
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
        className: this.props.hasErrors ? style.hasErrors : '',
        'aria-required': this.props.mandatory,
        style: styleRules
      };
      return <input {...props} />;
    }
  }
  render() {
    return (<div className={`${style.inputField} ${style[this.props.type]}`}>
      <Label htmlFor={this.props.id}>
        {this.props.label}
        {
          this.props.type === 'file'
            ? (<div className={style.fileInputContainer}>
              <span className={style.input}>{this.props.selectedFileName}</span>
              {
                this.props.buttonContent
                  ? <Button color={this.props.buttonColor} onClick={() => { document.getElementById(this.props.id).click() }} content={this.props.buttonContent} theme={this.props.theme} />
                  : ''
              }
            </div>)
            : ''
        }
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

InputField.propTypes = {
  /** Text content inside list item */
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ]),
  contentOnly: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonContent: PropTypes.string,
  selectedFileName: PropTypes.string,
  dateFormat: PropTypes.string,
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

InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false,
  buttonColor: 'default',
  dateFormat: 'd. MMMM, yyyy',
  placeholder: '',
  defaultContent: '',
  hasErrors: false,
  errorMessage: '',
  mandatory: false,
  onChange: () => { return false }
};

export default InputField;
