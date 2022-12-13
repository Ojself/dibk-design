// Dependencies
import { Children, cloneElement, Fragment, isValidElement } from "react";

export const classNameArrayToClassNameString = (classNameArray) => {
    return classNameArray?.filter((className) => className)?.join(" ") || "";
};

export const cloneThroughFragments = (children) => {
    return Children.map(children, (c) => {
        if (isValidElement(c)) {
            if (c.type === Fragment) {
                // just compare to `React.Fragment`
                return cloneThroughFragments(c.props.children);
            }
            return cloneElement(c, { ...c.props });
        }
        return c;
    });
};
