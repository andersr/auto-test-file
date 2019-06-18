"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_1 = __importDefault(require("create-file"));
var getFileExtension_1 = require("./getFileExtension");
var removeExtension_1 = require("./removeExtension");
var setTestFileContent_1 = require("./setTestFileContent");
exports.createTestFile = function (args) {
    console.log('args: ', args);
    var extension = getFileExtension_1.getFileExtension(args.fileName);
    var noExtension = removeExtension_1.removeExtension(args.fileName);
    console.log('extension: ', extension);
    // TODO: create clear relationship between "test" value and ignore, to prevent infinite loop of creates
    create_file_1.default("./" + args.path + "/" + noExtension + ".test." + extension, setTestFileContent_1.setTestFileContent(noExtension), function (err) {
        if (err) {
            console.log('err: ', err);
        }
        // file either already exists or is now created (including non existing directories)
    });
};
