"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeExtension_1 = require("./removeExtension");
describe("removeExtension", function () {
    it("it returns a string with the last dot and everything following removed", function () {
        var input = "foo.bar";
        var expected = "foo";
        expect(removeExtension_1.removeExtension(input)).toStrictEqual(expected);
    });
    it("it works for a string that ends with a dot", function () {
        var input = "foo.";
        var expected = "foo";
        expect(removeExtension_1.removeExtension(input)).toStrictEqual(expected);
    });
    it("it works for a string with multiple dots", function () {
        var input = "foo.bar.baz.boo";
        var expected = "foo.bar.baz";
        expect(removeExtension_1.removeExtension(input)).toStrictEqual(expected);
    });
});
