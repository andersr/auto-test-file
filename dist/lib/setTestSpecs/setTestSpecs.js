"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeQuoteMarks_1 = require("../removeQuoteMarks/removeQuoteMarks");
var DEFAULT_SPEC = 'does things';
var setSpecBlock = function (spec) { return "\n  it('" + removeQuoteMarks_1.removeQuoteMarks(spec).trim() + "', () => {\n    expect.hasAssertions();\n  });\n"; };
exports.setSpecItems = function (specs) {
    if (specs.length === 0) {
        return setSpecBlock(DEFAULT_SPEC);
    }
    {
        var specBlocks = '';
        for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
            var spec = specs_1[_i];
            specBlocks += setSpecBlock(spec);
        }
        return specBlocks;
    }
};
