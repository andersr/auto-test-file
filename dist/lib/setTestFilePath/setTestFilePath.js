"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.setTestFilePath = function (filePath, fileName) {
    var extension = path_1.default.extname(filePath);
    var projectDir = process.env.INIT_CWD;
    var projectPath = projectDir + "/" + path_1.default.dirname(filePath);
    return projectPath + "/" + fileName + ".test" + extension;
};
