import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.scss';

class Header extends React.Component {
	
	render () {
		const bigClass = this.props.big ? style.bigHeader : '';
		const themeClass = this.props.theme ? style.hasTheme : '';
		let headerElement = React.createElement('h' + this.props.size, { className: `${style.header} ${bigClass} ${themeClass}` }, this.props.content);
		return (<div className={ style.headerContainer }> { headerElement } </div>);
	}
}

Header.propTypes = {
	/** Text content inside button */
	content: PropTypes.string.isRequired,
	size: PropTypes.oneOf([1, 2, 3, 4, 5]),
	big: PropTypes.bool,
	theme: PropTypes.object
}

Header.defaultProps = {
	content: '',
	size: 1
}

export default Header;
