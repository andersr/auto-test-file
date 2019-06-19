"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTestFileContent = function (fileName) {
    return ("import { " + fileName + " } from \"./" + fileName + "\";\n\ndescribe(\"" + fileName + "\", () => {\n    it(\"does things\", () => {\n        expect.hasAssertions();\n    });\n});    \n\n");
};
