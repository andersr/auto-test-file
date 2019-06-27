"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var fileNameFromPath_1 = require("../fileNameFromPath");
exports.getCliInput = function (filePath, handleInput) {
    inquirer_1.default
        .prompt([
        {
            message: "Enter specs for " + fileNameFromPath_1.fileNameFromPath(filePath) + " (comma-separated, return to skip):",
            name: 'specs',
            type: 'input',
        },
    ])
        .then(function (answers) {
        handleInput(answers);
    })
        .catch(function (err) { return console.log('error: ', err); });
};
