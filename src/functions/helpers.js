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

export const setFocusToElement = (element) => {
    const autoFocusElement = document.createElement("button");
    element.prepend(autoFocusElement);
    autoFocusElement.focus();
    autoFocusElement.remove();
};

export const getFocusableElementsInsideElement = (element) => {
    return Array.from(element.querySelectorAll('button, [href], input, [tabindex="0"]')).filter(resultElement => {
        return resultElement;
    });
};

export const addFocusTrapInsideElement = (element) => {
    setFocusToElement(element);
    const focusableElements = getFocusableElementsInsideElement(element);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    firstFocusableElement.onkeydown = (event) => {
        if (event.keyCode === 9 && event.shiftKey) {
            lastFocusableElement.focus();
        }
    };
    lastFocusableElement.onclick = () => {
        firstFocusableElement.focus();
    };
    lastFocusableElement.onkeydown = (event) => {
        if (event.keyCode === 9 && !event.shiftKey) {
            event.preventDefault();
            firstFocusableElement.focus();
        }
    };
};
