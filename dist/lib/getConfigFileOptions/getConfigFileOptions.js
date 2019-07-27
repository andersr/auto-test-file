"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var constants_1 = require("../constants");
exports.getConfigFileOptions = function (path) {
    if (path === void 0) { path = process.cwd() + "/" + constants_1.DEFAULT_CONFIG_FILE; }
    return fs_1.default.existsSync(path) ? require(path) : {};
};
