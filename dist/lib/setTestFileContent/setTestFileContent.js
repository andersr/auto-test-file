"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestSpecs_1 = require("../setTestSpecs");
var testFileTemplates_1 = require("../testFileTemplates");
exports.setTestFileContent = function (fileName, specs) {
    return testFileTemplates_1.DEFAULT_TEMPLATE({ fileName: fileName, specs: specs, setSpecItems: setTestSpecs_1.setSpecItems });
};
