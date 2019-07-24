"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.getConfigFileData = function () {
    try {
        var path = process.cwd() + "/atf.config.js";
        if (fs_1.default.existsSync(path)) {
            // tslint:disable-next-line:no-var-requires
            return require(path);
        }
        else {
            return undefined;
        }
    }
    catch (err) {
        console.error(err);
    }
};
