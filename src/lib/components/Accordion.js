import React from 'react';
import PropTypes from 'prop-types';
import style from './Accordion.module.scss';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            initialized: this.props.expanded
        };
        this.handleToggleExpand = this.handleToggleExpand.bind(this);
    }

    handleToggleExpand() {
        this.setState({
            expanded: !this.state.expanded,
            initialized: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.expanded !== prevProps.expanded) {
            this.setState({
                expanded: this.props.expanded
            });
        }
    }

    renderPanel() {
        return (
            <div className={style.panel} onClick={this.handleToggleExpand}>
                <span className={style.panelText}>{this.props.title}</span>
                <span className={`${style.panelChevron} ${this.state.expanded ? style.expanded : ''}`}></span>
            </div>
        )
    }
    render() {
        const className = `${style.accordion} ${this.props.color ? style[this.props.color] : ''}`;
        return (
            <div className={className}>
                {this.renderPanel()}
                <div className={`${style.content} ${this.state.initialized ? style.initialized : ''} ${this.state.expanded ? style.expanded : ''}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Accordion.propTypes = {
    /** Content title inside box */
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(['regular', 'large']),
    /** Text content inside box */
    content: PropTypes.string,
    color: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime']),
    expanded: PropTypes.bool
}

Accordion.defaultProps = {
    title: null,
    titleSize: 'regular',
    href: null,
    content: '',
    color: 'default',
    expanded: false
}

export default Accordion;
