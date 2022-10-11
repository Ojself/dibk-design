import React from "react";
import PropTypes from "prop-types";

const ListItem = (props) => {
    const elementProps = {
        key: props.elementKey || null
    };
    return (
        <li {...elementProps}>
            {props.children}
            {props.elementKey}
        </li>
    );
};

ListItem.propTypes = {
    elementKey: PropTypes.string
};

export default ListItem;
