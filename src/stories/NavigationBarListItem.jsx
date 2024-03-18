// Dependencies
import React from "react";
import PropTypes from "prop-types";

const NavigationBarListItem = (props) => {
    if (typeof props.listItem === "string") {
        return (
            <li>
                <span>{props.listItem}</span>
            </li>
        );
    } else if (typeof props.listItem === "object") {
        return (
            <li>
                <a href={props.listItem.href}>{props.listItem.name}</a>
            </li>
        );
    } else {
        return null;
    }
};

NavigationBarListItem.propTypes = {
    listItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default NavigationBarListItem;
