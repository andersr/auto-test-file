"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var glob_1 = __importDefault(require("glob"));
var validateOptions_1 = require("../validateOptions");
exports.watcherInit = function (options) {
    if (!validateOptions_1.optionsValid(options)) {
        return;
    }
    // TODO: test with large amount of files
    var initialFiles = glob_1.default.sync(options.directory + "/**/*");
    __1.fileWatcher(options, initialFiles);
};
