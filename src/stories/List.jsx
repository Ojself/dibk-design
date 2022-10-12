// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./List.module.scss";

const List = (props) => {
    const renderList = () => {
        let listType = props.ordered ? "ol" : "ul";
        const defaultListStyle = props.ordered ? "decimal" : "disc";
        const scssValueProperty = "--listStyle";
        let listElement = React.createElement(
            listType,
            {
                className: `${style.list} ${!!props.compact ? style.compact : ""}`,
                style: { [scssValueProperty]: props.listStyle || defaultListStyle }
            },
            props.children
        );
        return listElement;
    };
    return renderList();
};

List.propTypes = {
    listStyle: PropTypes.string,
    compact: PropTypes.bool,
    ordered: PropTypes.bool
};

List.defaultProps = {
    ordered: false,
    compact: false
};

export default List;
