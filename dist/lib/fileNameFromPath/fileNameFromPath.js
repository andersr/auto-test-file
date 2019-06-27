"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var removeExtension_1 = require("../removeExtension");
exports.fileNameFromPath = function (filePath) { return removeExtension_1.removeExtension(path_1.default.basename(filePath)); };
