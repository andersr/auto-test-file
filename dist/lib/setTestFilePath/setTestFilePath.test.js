"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestFilePath_1 = require("./setTestFilePath");
describe('setTestFilePath', function () {
    afterEach(function () {
        delete process.env.INIT_CWD;
    });
    it('it generates a full test file path', function () {
        var projectDir = '/Users/someuser/dev/my_project';
        var filePath = 'src/myFile.ts';
        var fileName = 'myFile';
        process.env.INIT_CWD = projectDir;
        var expected = '/Users/someuser/dev/my_project/src/myFile.test.ts';
        expect(setTestFilePath_1.setTestFilePath(filePath, fileName)).toEqual(expected);
    });
});
