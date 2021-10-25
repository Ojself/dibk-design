import React from 'react';
import PropTypes from 'prop-types';
import style from './Label.module.scss';

class Label extends React.Component {

    render() {
        let labelProps = {...this.props};
        delete labelProps.inline;
        delete labelProps.normalCursor;
        const className = `${style.label} ${this.props.inline ? style.inline : ''} ${this.props.normalCursor ? style.normalCursor : ''}`;
        return (<label {...labelProps} className={className}>{this.props.children}</label>)
    }
}

Label.propTypes = {
    inline: PropTypes.bool,
    normalCursor: PropTypes.bool
}

Label.defaultProps = {
    inline: false,
    normalCursor: false
}

export default Label;
