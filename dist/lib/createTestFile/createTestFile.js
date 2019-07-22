"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_1 = __importDefault(require("create-file"));
var setTestFileContent_1 = require("../setTestFileContent");
var setTestFilePath_1 = require("../setTestFilePath");
var fileNameFromPath_1 = require("../fileNameFromPath");
exports.createTestFile = function (filePath, specs) {
    var fileName = fileNameFromPath_1.fileNameFromPath(filePath);
    var testFilePath = setTestFilePath_1.setTestFilePath(filePath, fileName);
    create_file_1.default(testFilePath, setTestFileContent_1.setTestFileContent(fileName, specs), function (err) {
        if (err) {
            console.log('err: ', err);
        }
        else {
            console.log("Test file added for '" + fileName + "'");
        }
    });
};
