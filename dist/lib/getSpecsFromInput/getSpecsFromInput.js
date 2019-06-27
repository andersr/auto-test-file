"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecsFromInput = function (input) { return input && input.specs && input.specs.trim() !== '' ?
    input.specs.split(',')
    :
        []; };
