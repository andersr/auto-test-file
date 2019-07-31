"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setWatchGlob_1 = require("./setWatchGlob");
describe('setWatchGlob', function () {
    it('returns a watch glob based on config options', function () {
        var CONFIG_OPTIONS = {
            directory: 'src',
            extensions: ['js', 'jsx'],
        };
        var expected = './src/**/*.{js|jsx}';
        expect(setWatchGlob_1.setWatchGlob(CONFIG_OPTIONS)).toStrictEqual(expected);
    });
});
