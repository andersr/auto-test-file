"use strict";
/**
 * Describe block template
 * @property {string} functionName - The name of the function being tested (assumes file name matches function name)
 * @property {function} setSpecItems - function used to generate specs block templates
 * @property {string[]} specs - descriptions of each spec that was entered
 * @property {object} specTemplate - template used to generate spec blocks
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DESCRIBE_BLOCK_TEMPLATE = "import { <%= functionName %> } from './<%= functionName %>';\n\ndescribe('<%= functionName %>', () => {\n      <%= setSpecItems(specs, specTemplate) %>\n});\n\n";
