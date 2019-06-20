"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestFilePath_1 = require("./setTestFilePath");
// const removeWhiteSpace = (str: string) => str.replace(/\s+/g, ' ').trim();
describe("setTestFilePath", function () {
    afterEach(function () {
        delete process.env.INIT_CWD;
    });
    it("it generates a full test file path", function () {
        var projectDir = "/Users/someuser/dev/my_project";
        var filePath = "src/myFile.ts";
        process.env.INIT_CWD = projectDir;
        var expected = "/Users/someuser/dev/my_project/src/myFile.test.ts";
        // const content = removeWhiteSpace(setTestFilePath(input));
        expect(setTestFilePath_1.setTestFilePath(filePath)).toEqual(expected);
    });
});
