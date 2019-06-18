"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var OPTION_DEFINITIONS = [
    {
        name: 'directories',
        alias: "d",
        type: String,
        multiple: true
    },
    {
        name: 'extensions',
        alias: "e",
        type: String,
        multiple: true,
    },
];
var CLI_CONFIG = {
    partial: true,
    stopAtFirstUnknown: true
};
var UNKNOWN_OPTION_MESSAGE = "Unknown option.  Please try again.";
exports.getCliOptions = function () {
    var options = command_line_args_1.default(OPTION_DEFINITIONS, CLI_CONFIG);
    console.log('options: ', options);
    if (options._unknown) {
        console.log(UNKNOWN_OPTION_MESSAGE);
        // just return?
        return undefined;
    }
    return options;
};
