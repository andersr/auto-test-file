"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs, specTemplate) %>\n});\n\n";
