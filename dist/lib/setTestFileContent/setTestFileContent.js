"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestSpecs_1 = require("../setTestSpecs");
exports.setTestFileContent = function (fileName, specs) {
    return ("import { " + fileName + " } from './" + fileName + "';\n\ndescribe('" + fileName + "', () => {\n   " + setTestSpecs_1.setSpecItems(specs) + "\n});\n\n");
};
