// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./ContentBox.module.scss";

const ContentBox = (props) => {
    const renderTitle = () => {
        let className = style.title + " " + style[props.titleSize];
        if (props.title) {
            return <h2 className={className}>{props.title}</h2>;
        } else {
            return;
        }
    };
    let colorClass = " " + style[props.color];
    let linkClass = props.href ? " " + style.link : "";
    let className = style.contentBox + colorClass + linkClass;
    const bodyContent = props.content?.length ? props.content : props.children;
    if (props.href) {
        return (
            <a href={props.href} className={className}>
                {renderTitle()}
                <div className={style.content}>{bodyContent}</div>
            </a>
        );
    } else {
        return (
            <div className={className}>
                {renderTitle()}
                <div className={style.content}>{bodyContent}</div>
            </div>
        );
    }
};

ContentBox.propTypes = {
    /** Content title inside box */
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(["regular", "large"]),
    /** Text content inside box */
    content: PropTypes.string,
    /** HTML content inside box if not content is set */
    children: PropTypes.any,
    color: PropTypes.oneOf([
        "default",
        "primary",
        "success",
        "warning",
        "info",
        "lightCyan",
        "orange",
        "lightOrange",
        "lime",
        "lightLime"
    ])
};

ContentBox.defaultProps = {
    title: null,
    titleSize: "regular",
    href: null,
    content: "",
    color: "default"
};

export default ContentBox;
