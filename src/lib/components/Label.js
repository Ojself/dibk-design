import React from 'react';
import PropTypes from 'prop-types';
import style from './Label.module.scss';

class Label extends React.Component {

    render() {
        let labelProps = {...this.props};
        delete labelProps.inline
        const className = `${style.label} ${this.props.inline ? style.inline : ''}`;
        return (<label {...labelProps} className={className}>{this.props.children}</label>)
    }
}

Label.propTypes = {
    inline: PropTypes.bool
}

Label.defaultProps = {
    inline: false
}

export default Label;
