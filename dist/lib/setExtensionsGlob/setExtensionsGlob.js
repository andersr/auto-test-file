"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setExtensionsGlob = function (ext) {
    return ext.length === 1 ? ext[0] : "{" + ext.join("|") + "}";
};
