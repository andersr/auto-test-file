"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestSpecs_1 = require("../setTestSpecs");
exports.setTestFileContent = function (_a) {
    var fileName = _a.fileName, specs = _a.specs;
    return ("import { " + fileName + " } from './" + fileName + "';\n\n    describe('" + fileName + "', () => {\n      " + setTestSpecs_1.setSpecItems(specs) + "\n    });\n\n  ");
};
