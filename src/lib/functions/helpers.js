export const classNameArrayToClassNameString = (classNameArray) => {
    return classNameArray?.filter((className) => className)?.join(" ") || "";
};
