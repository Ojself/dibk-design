import React from "react";
import PropTypes from "prop-types";
import style from "./Header.module.scss";

const Header = (props) => {
    const bigClass = props.big ? style.bigHeader : "";
    const themeClass = props.theme ? style.hasTheme : "";
    const htmlTag = props.htmlTag?.length ? props.htmlTag : `h${props.size}`;
    const headerClass = style.header;
    const headerSizeClass = style[`size-${props.size}`];
    let headerElement = React.createElement(
        htmlTag,
        { className: `${headerClass} ${headerSizeClass} ${bigClass} ${themeClass}` },
        !!props.content?.length ? props.content : props.children // prps.content for backward compatibility
    );
    return <div className={style.headerContainer}> {headerElement} </div>;
};

Header.propTypes = {
    /** Text content inside button */
    content: PropTypes.string,
    size: PropTypes.oneOf([1, 2, 3, 4, 5]),
    big: PropTypes.bool,
    htmlTag: PropTypes.string,
    theme: PropTypes.object
};

Header.defaultProps = {
    size: 1
};

export default Header;
