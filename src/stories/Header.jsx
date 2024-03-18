// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Header.module.scss";

// Helpers
import { classNameArrayToClassNameString } from "../functions/helpers";

const Header = (props) => {
    const bigClass = props.big ? style.bigHeader : "";
    const htmlTag = props.htmlTag?.length ? props.htmlTag : `h${props.size}`;
    const headerClass = style.header;
    const headerSizeClass = style[`size-${props.size}`];
    let headerElement = React.createElement(
        htmlTag,
        {
            className: classNameArrayToClassNameString([headerClass, headerSizeClass, bigClass]),
            id: props.id || null,
            htmlFor: props.htmlFor || null
        },
        !!props.content?.length ? props.content : props.children // props.content for backward compatibility
    );
    return <div className={style.headerContainer}> {headerElement} </div>;
};

Header.propTypes = {
    id: PropTypes.string,
    /** Text content inside button */
    content: PropTypes.string,
    size: PropTypes.oneOf([1, 2, 3, 4, 5]),
    big: PropTypes.bool,
    htmlTag: PropTypes.string,
    htmlFor: PropTypes.string
};

Header.defaultProps = {
    size: 1
};

export default Header;
