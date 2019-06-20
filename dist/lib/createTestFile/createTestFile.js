"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_1 = __importDefault(require("create-file"));
var path_1 = __importDefault(require("path"));
var setTestFileContent_1 = require("../setTestFileContent");
var removeExtension_1 = require("../removeExtension");
var setTestFilePath_1 = require("../setTestFilePath");
exports.createTestFile = function (filePath) {
    var fileName = removeExtension_1.removeExtension(path_1.default.basename(filePath));
    var testFilePath = setTestFilePath_1.setTestFilePath(filePath, fileName);
    create_file_1.default(testFilePath, setTestFileContent_1.setTestFileContent(fileName), function (err) {
        if (err) {
            console.log("err: ", err);
        }
    });
};
