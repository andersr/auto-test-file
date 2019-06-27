"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setExtensionsGlob_1 = require("../setExtensionsGlob");
exports.setWatchGlob = function (options) {
    return "./" + options.directory + "/**/*." + setExtensionsGlob_1.setExtensionsGlob(options.extensions);
};
