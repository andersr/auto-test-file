"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileNameFromPath_1 = require("./fileNameFromPath");
describe('fileNameFromPath', function () {
    it('returns a file name from a file path', function () {
        var input = './src/components/MyComponent.tsx';
        var expected = 'MyComponent';
        expect(fileNameFromPath_1.fileNameFromPath(input)).toStrictEqual(expected);
    });
});
