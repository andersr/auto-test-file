"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("../messages");
exports.validateOptions = function (options) {
    if (!options) {
        console.log(messages_1.NO_OPTIONS_MESSAGE);
        return false;
    }
    if (options._unknown) {
        console.log(messages_1.UNKNOWN_OPTION_MESSAGE);
        return false;
    }
    if (!options.directory) {
        // TODO: also confirm that directory exists
        console.log(messages_1.NO_DIRECTORY_MESSAGE);
        return false;
    }
    if (!options.extensions) {
        console.log(messages_1.NO_EXTENSIONS_MESSAGE);
        return false;
    }
    return true;
};
