"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeQuoteMarks_1 = require("./removeQuoteMarks");
describe('removeQuoteMarks', function () {
    it('it returns a string with quote marks removed', function () {
        var input1 = 'foo bar';
        var expected1 = 'foo bar';
        expect(removeQuoteMarks_1.removeQuoteMarks(input1)).toStrictEqual(expected1);
        var input2 = "foo\"bar\"\"'";
        var expected2 = 'foobar';
        expect(removeQuoteMarks_1.removeQuoteMarks(input2)).toStrictEqual(expected2);
    });
});
