"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_1 = __importDefault(require("create-file"));
var path_1 = __importDefault(require("path"));
var removeExtension_1 = require("../removeExtension");
var setTestFileContent_1 = require("../setTestFileContent");
exports.createTestFile = function (filePath) {
    var fileName = path_1.default.basename(filePath);
    var extension = path_1.default.extname(filePath);
    var noExtension = removeExtension_1.removeExtension(fileName);
    var projectDir = process.env.INIT_CWD;
    var projectPath = projectDir + "/" + path_1.default.dirname(filePath);
    // TODO: create clear relationship between "test" value and ignore, to prevent infinite loop of creates
    var newFile = projectPath + "/" + noExtension + ".test" + extension;
    create_file_1.default(newFile, setTestFileContent_1.setTestFileContent(noExtension), function (err) {
        if (err) {
            console.log("err: ", err);
        }
    });
};
