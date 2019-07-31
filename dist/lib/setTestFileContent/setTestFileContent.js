"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setSpecItems_1 = require("../setSpecItems");
exports.setTestFileContent = function (_a) {
    var fileName = _a.fileName, specs = _a.specs, describeTemplate = _a.describeTemplate, specTemplate = _a.specTemplate;
    return describeTemplate({ functionName: fileName, specs: specs, setSpecItems: setSpecItems_1.setSpecItems, specTemplate: specTemplate });
};
