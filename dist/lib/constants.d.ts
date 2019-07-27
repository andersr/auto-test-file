export declare const DEFAULT_CONFIG_FILE = "atf.config.js";
export declare const DEFAULT_WATCH_IGNORE: RegExp[];
export declare const DEFAULT_SPEC = "does things";
export declare const DESCRIBE_BLOCK_TEMPLATE = "import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs, specTemplate) %>\n});\n\n";
export declare const SPEC_BLOCK_TEMPLATE = "\nit('<%= spec %>', () => {\n  expect.hasAssertions();\n});\n";
