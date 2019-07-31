"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeQuoteMarks_1 = require("../removeQuoteMarks");
var constants_1 = require("../constants");
var setSpecBlock = function (spec, specTemplate) { return specTemplate({ spec: removeQuoteMarks_1.removeQuoteMarks(spec).trim() }); };
exports.setSpecItems = function (specs, specTemplate) {
    if (specs.length === 0) {
        return setSpecBlock(constants_1.DEFAULT_SPEC, specTemplate);
    }
    // {
    var specBlocks = '';
    for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
        var spec = specs_1[_i];
        specBlocks += setSpecBlock(spec, specTemplate);
    }
    return specBlocks;
};
