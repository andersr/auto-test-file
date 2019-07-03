"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var glob_1 = __importDefault(require("glob"));
var options = lib_1.getCliOptions();
// TODO: replace cb with async model
var cliInit = function (err, matches) {
    var initialFiles = [];
    if (err) {
        console.log('Get file paths error: ', err);
    }
    initialFiles = matches.slice();
    lib_1.fileWatcher(options, initialFiles);
};
if (lib_1.optionsValid(options)) {
    // TODO: confirm that this is a valid directory
    glob_1.default(options.directory + "/**/*", cliInit);
}
