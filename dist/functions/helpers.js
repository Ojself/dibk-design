"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNameArrayToClassNameString = void 0;
var classNameArrayToClassNameString = function classNameArrayToClassNameString(classNameArray) {
  var _classNameArray$filte;
  return (classNameArray === null || classNameArray === void 0 ? void 0 : (_classNameArray$filte = classNameArray.filter(function (className) {
    return className;
  })) === null || _classNameArray$filte === void 0 ? void 0 : _classNameArray$filte.join(" ")) || "";
};
exports.classNameArrayToClassNameString = classNameArrayToClassNameString;