"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
exports.watcherInit = function (_a) {
    var matches = _a.matches, options = _a.options, err = _a.err;
    var initialFiles = [];
    if (err) {
        console.log('Get file paths error: ', err);
    }
    initialFiles = matches.slice();
    __1.fileWatcher(options, initialFiles);
};
