import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBoxListItem.module.scss';
import CheckBoxInput from './CheckBoxInput';

class CheckBoxListItem extends React.Component {
  render() {
    return (
      <div className={`${style.checkBoxListItem} ${this.props.checked ? style.checked : ''} ${this.props.contentOnly ? style.contentOnly : ''} ${this.props.compact ? style.compact : ''} ${this.props.hasErrors ? style.hasErrors : ''}`}>
        <CheckBoxInput onChange={this.props.onChange} checked={this.props.checked} contentOnly={this.props.contentOnly} hasErrors={this.props.hasErrors} id={this.props.id} theme={this.props.theme}>
          {this.props.children}
        </CheckBoxInput>
      </div>
    )
  }
}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object,
  compact: PropTypes.bool,
  hasErrors: PropTypes.bool
};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: '',
  contentOnly: false,
  hasErrors: false
};
export default CheckBoxListItem;
