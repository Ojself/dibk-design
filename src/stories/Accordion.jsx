// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Accordion.module.scss";

const Accordion = (props) => {
    const [expanded, setExpanded] = useState(props.expanded);
    const [initialized, setInitialized] = useState(props.initialized);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
        setInitialized(true);
    };

    useEffect(() => {
        setExpanded(props.expanded);
    }, [props.expanded]);

    const renderPanel = () => {
        return (
            <button className={style.panel} onClick={handleToggleExpand} aria-expanded={expanded ? "true" : "false"}>
                <span className={style.panelText}>{props.title}</span>
                <span className={`${style.panelChevron} ${expanded ? style.expanded : ""}`}></span>
            </button>
        );
    };

    const className = `${style.accordion} ${props.color ? style[props.color] : ""}`;
    return (
        <div className={className}>
            {renderPanel()}
            <div
                className={`${style.content} ${initialized ? style.initialized : ""} ${expanded ? style.expanded : ""}`}
            >
                {props.children}
            </div>
        </div>
    );
};

Accordion.propTypes = {
    /** Content title inside box */
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(["regular", "large"]),
    /** Text content inside box */
    content: PropTypes.string,
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
    ]),
    expanded: PropTypes.bool
};

Accordion.defaultProps = {
    title: null,
    titleSize: "regular",
    href: null,
    content: "",
    color: "default",
    expanded: false
};

export default Accordion;
