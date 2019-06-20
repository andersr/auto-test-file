"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var options = lib_1.getCliOptions();
if (lib_1.optionsValid(options)) {
    lib_1.dirWatcher(options.directory, options.extensions);
}
