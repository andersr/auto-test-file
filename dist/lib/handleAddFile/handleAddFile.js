"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createTestFile_1 = require("../createTestFile");
var getCliInput_1 = require("../getCliInput");
var getSpecsFromInput_1 = require("../getSpecsFromInput");
exports.handleAddFile = function (filePath, options) {
    if (options.noSpecInput) {
        createTestFile_1.createTestFile(filePath, []);
    }
    else {
        getCliInput_1.getCliInput(filePath, function (answers) { return createTestFile_1.createTestFile(filePath, getSpecsFromInput_1.getSpecsFromInput(answers)); });
    }
};
