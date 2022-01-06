import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.scss';

class Header extends React.Component {

	render() {
		const bigClass = this.props.big ? style.bigHeader : '';
		const themeClass = this.props.theme ? style.hasTheme : '';
		const htmlTag = this.props.htmlTag?.length ? this.props.htmlTag : `h${this.props.size}`;
		const headerClass = style.header;
		const headerSizeClass = style[`size-${this.props.size}`];
		let headerElement = React.createElement(htmlTag, { className: `${headerClass} ${headerSizeClass} ${bigClass} ${themeClass}` }, this.props.content);
		return (<div className={style.headerContainer}> {headerElement} </div>);
	}
}

Header.propTypes = {
	/** Text content inside button */
	content: PropTypes.string.isRequired,
	size: PropTypes.oneOf([1, 2, 3, 4, 5]),
	big: PropTypes.bool,
	htmlTag: PropTypes.string,
	theme: PropTypes.object
}

Header.defaultProps = {
	content: '',
	size: 1
}

export default Header;
