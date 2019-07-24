"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { removeQuoteMarks } from '../removeQuoteMarks/removeQuoteMarks';
var lodash_1 = require("lodash");
var removeQuoteMarks_1 = require("../removeQuoteMarks");
var DEFAULT_SPEC = 'does things';
exports.SPEC_BLOCK_TEMPLATE = "\nit('<%= spec %>', () => {\n  expect.hasAssertions();\n});\n";
exports.specBlock = lodash_1.template(exports.SPEC_BLOCK_TEMPLATE);
var setSpecBlock = function (spec) { return exports.specBlock({ spec: removeQuoteMarks_1.removeQuoteMarks(spec).trim() }); };
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
