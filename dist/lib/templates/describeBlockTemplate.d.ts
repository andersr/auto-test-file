export declare const DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs, specTemplate) %>\n});\n\n";
