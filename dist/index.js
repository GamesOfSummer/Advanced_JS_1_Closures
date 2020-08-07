"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function summation(n) {
    var array = __spreadArrays(Array.from(Array(n).keys()), [n]);
    return array.reduce(function (a, b) { return a + b; }, 0);
}
exports.summation = summation;
//# sourceMappingURL=intex.js.map