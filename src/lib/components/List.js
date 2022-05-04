import React from "react";
import PropTypes from "prop-types";
import style from "./List.module.scss";

const ListItem = (props) => {
    return <li>{props.listItem}</li>;
};

const List = (props) => {
    const renderList = () => {
        let listItems = props.listItems.map(function (listItem, i) {
            return <ListItem listItem={listItem} key={i} />;
        });
        let listType = props.ordered ? "ol" : "ul";
		const defaultListStyle = props.ordered ? 'decimal' : 'disc';
        const scssValueProperty = "--listStyle";
        let listElement = React.createElement(
            listType,
            { className: `${style.list} ${!!props.compact ? style.compact : ''}`, style: { [scssValueProperty]: props.listStyle || defaultListStyle } },
            listItems
        );
        return listElement;
    };
    return renderList();
};

List.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
	ordered: PropTypes.bool
}

List.defaultProps = {
    listItems: [],
    ordered: false
};

export default List;
