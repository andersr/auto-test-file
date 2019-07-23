"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs) %>\n});\n\n";
exports.describeBlock = lodash_1.template(exports.DESCRIBE_BLOCK_TEMPLATE);
