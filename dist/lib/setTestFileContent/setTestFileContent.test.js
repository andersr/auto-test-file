"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestFileContent_1 = require("./setTestFileContent");
var removeWhiteSpace = function (str) { return str.replace(/\s+/g, ' ').trim(); };
describe("setTestFileContent", function () {
    it("it returns a block of text containing the passed in string", function () {
        var input = "myUtil";
        var expected = removeWhiteSpace("import { myUtil } from \"./myUtil\";\n\n    describe(\"myUtil\", () => {\n        it(\"does things\", () => {\n            expect.hasAssertions();\n        });\n    });    \n    \n    ");
        var content = removeWhiteSpace(setTestFileContent_1.setTestFileContent(input));
        expect(content).toEqual(expected);
    });
});
