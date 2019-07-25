"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];
exports.DEFAULT_SPEC = 'does things';
exports.DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs, specBlock) %>\n});\n\n";
exports.SPEC_BLOCK_TEMPLATE = "\nit('<%= spec %>', () => {\n  expect.hasAssertions();\n});\n";
