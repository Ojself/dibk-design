// Dependencies
import { Children, cloneElement, Fragment, isValidElement } from "react";

export const classNameArrayToClassNameString = (classNameArray) => {
    return classNameArray?.filter((className) => className)?.join(" ") || "";
};

export const camelCaseToKebabCase = (string) => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

export const getCssColorVariablesFromTheme = (theme) => {
    return (
        !!theme?.colors &&
        !!Object.entries(theme?.colors)?.length &&
        Object.entries(theme?.colors).reduce((acc, [key, value]) => {
            if (key?.length && value?.length) {
                acc[`--color-${camelCaseToKebabCase(key)}`] = value;
            }
            return acc;
        }, {})
    );
};

export const getCssSizeVariablesFromTheme = (theme) => {
    return (
        !!theme?.sizes &&
        !!Object.entries(theme?.sizes)?.length &&
        Object.entries(theme?.sizes).reduce((acc, [key, value]) => {
            if (key?.length && value?.length) {
                acc[`--size-${camelCaseToKebabCase(key)}`] = value;
            }
            return acc;
        }, {})
    );
};

export const getCssVariablesFromTheme = (theme) => {
    return {
        ...getCssColorVariablesFromTheme(theme),
        ...getCssSizeVariablesFromTheme(theme)
    };
}

export const addGlobalStylesheet = (styleElementId, styles) => {
    const style = document.createElement("style");
    style.setAttribute("id", styleElementId);
    style.textContent = styles;
    document.getElementById(styleElementId)?.remove();
    document.head.appendChild(style);
};

export const stringifyCssColorVariables = (colorVariables) => {
    return Object.keys(colorVariables).reduce((css, key) => {
        return `${css}${key}: ${colorVariables[key]};`;
    }, "");
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
    return Array.from(element.querySelectorAll('button, [href], input, [tabindex="0"]')).filter((resultElement) => {
        return resultElement;
    });
};

export const addFocusTrapInsideElement = (element) => {
    setFocusToElement(element);
    const focusableElements = getFocusableElementsInsideElement(element);
    const firstFocusableElement = focusableElements?.length ? focusableElements[0] : null;
    const lastFocusableElement =
        focusableElements?.length > 1 ? focusableElements[focusableElements.length - 1] : firstFocusableElement;
    if (firstFocusableElement) {
        firstFocusableElement.onkeydown = (event) => {
            if (event.keyCode === 9 && event.shiftKey) {
                lastFocusableElement.focus();
            }
        };
    }
    if (lastFocusableElement) {
        lastFocusableElement.onclick = () => {
            firstFocusableElement.focus();
        };
        lastFocusableElement.onkeydown = (event) => {
            if (event.keyCode === 9 && !event.shiftKey) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        };
    }
};
