"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var OPTION_DEFINITIONS = [
    {
        name: 'directory',
        alias: 'd',
        type: String,
    },
    {
        name: 'extensions',
        alias: 'e',
        type: String,
        multiple: true,
    },
    {
        name: 'noSpecInput',
        type: Boolean,
        defaultValue: false,
    },
    {
        name: 'config',
        alias: 'c',
        type: String,
    },
];
var CLI_CONFIG = {
    partial: true,
    stopAtFirstUnknown: true,
};
exports.getCliOptions = function () { return command_line_args_1.default(OPTION_DEFINITIONS, CLI_CONFIG); };
