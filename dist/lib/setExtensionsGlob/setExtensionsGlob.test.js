"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setExtensionsGlob_1 = require("./setExtensionsGlob");
describe('setExtensionsGlob', function () {
    it('returns a single extension as a string', function () {
        var expected = 'foo';
        var SINGLE_EXTENSION = [expected];
        expect(setExtensionsGlob_1.setExtensionsGlob(SINGLE_EXTENSION)).toStrictEqual(expected);
    });
    it("returns multiple extensions in the format '{ex1|ex2|ex3}'", function () {
        var expected = '{foo|bar|baz}';
        var MULTI_EXTENSION = ['foo', 'bar', 'baz'];
        expect(setExtensionsGlob_1.setExtensionsGlob(MULTI_EXTENSION)).toStrictEqual(expected);
    });
});
