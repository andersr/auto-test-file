/// <reference types="lodash" />
export declare const DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs) %>\n});\n\n";
export declare const describeBlock: import("lodash").TemplateExecutor;
