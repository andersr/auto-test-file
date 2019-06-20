"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var OPTION_DEFINITIONS = [
    {
        name: "directory",
        alias: "d",
        type: String
    },
    {
        name: "extensions",
        alias: "e",
        type: String,
        multiple: true
    }
];
var CLI_CONFIG = {
    partial: true,
    stopAtFirstUnknown: true
};
var UNKNOWN_OPTION_MESSAGE = "Unknown option. Please try again.";
var NO_DIRECTORY_MESSAGE = "Please include a directory to watch.";
var NO_EXTENSIONS_MESSAGE = "Please include one or more file types to watch.";
exports.getCliOptions = function () {
    var options = command_line_args_1.default(OPTION_DEFINITIONS, CLI_CONFIG);
    console.log("options: ", options);
    if (options._unknown) {
        console.log(UNKNOWN_OPTION_MESSAGE);
        return;
    }
    if (!options.directory) {
        console.log(NO_DIRECTORY_MESSAGE);
        return;
    }
    if (!options.extensions) {
        console.log(NO_EXTENSIONS_MESSAGE);
        return;
    }
    return options;
};
