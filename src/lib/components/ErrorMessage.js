// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Functions
import { getThemePaletteBackgroundColor } from '../functions/theme';

// Stylesheets
import style from './ErrorMessage.module.scss';


class ErrorMessage extends React.Component {
    getThemeErrorMessageStyle(theme) {
        return {
            color: getThemePaletteBackgroundColor(theme, 'warning')
        }
    }
    render() {
        return (
            <span className={style.errorMessage} style={this.getThemeErrorMessageStyle(this.props.theme)}>
                {this.props.content ? this.props.content : ''}
            </span>
        )
    }
}

ErrorMessage.propTypes = {
    /** Text content inside error message */
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]))
    ]),
    theme: PropTypes.object
};

ErrorMessage.defaultProps = {
    content: ''
};

export default ErrorMessage;
