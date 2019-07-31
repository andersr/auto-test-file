"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSpecsFromInput_1 = require("./getSpecsFromInput");
describe('getSpecsFromInput', function () {
    it('returns an empty array if input.specs is not defined or if input.specs is empty', function () {
        var NO_SPECS = {};
        var EMPTY_SPECS = {
            specs: '',
        };
        expect(getSpecsFromInput_1.getSpecsFromInput(NO_SPECS)).toStrictEqual([]);
        expect(getSpecsFromInput_1.getSpecsFromInput(EMPTY_SPECS)).toStrictEqual([]);
    });
    it('returns an array of strings from a comma-separated string', function () {
        var WITH_SPECS = {
            specs: 'first spec,second spec,third spec',
        };
        var expected = [
            'first spec',
            'second spec',
            'third spec',
        ];
        expect(getSpecsFromInput_1.getSpecsFromInput(WITH_SPECS)).toStrictEqual(expected);
    });
    it('excludes empty specs', function () {
        var WITH_SPECS = {
            specs: 'first spec,    ,second spec,third spec,',
        };
        var expected = [
            'first spec',
            'second spec',
            'third spec',
        ];
        expect(getSpecsFromInput_1.getSpecsFromInput(WITH_SPECS)).toStrictEqual(expected);
    });
});
