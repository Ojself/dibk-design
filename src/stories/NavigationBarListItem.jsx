// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemeNavigationBarTextColor } from "../functions/theme";

const NavigationBarListItem = (props) => {
    const getListItemThemeStyle = () => {
        return {
            color: getThemeNavigationBarTextColor(props.theme),
            borderBottomColor: getThemeNavigationBarTextColor(props.theme)
        };
    };

    const listItemThemeStyle = getListItemThemeStyle();

    if (typeof props.listItem === "string") {
        return (
            <li>
                <span style={listItemThemeStyle}>{props.listItem}</span>
            </li>
        );
    } else if (typeof props.listItem === "object") {
        return (
            <li>
                <a href={props.listItem.href} style={listItemThemeStyle}>
                    {props.listItem.name}
                </a>
            </li>
        );
    } else {
        return null;
    }
};

NavigationBarListItem.propTypes = {
    listItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    theme: PropTypes.object
};

export default NavigationBarListItem;
