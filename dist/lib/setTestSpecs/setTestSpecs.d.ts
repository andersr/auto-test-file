/// <reference types="lodash" />
export declare const SPEC_BLOCK_TEMPLATE = "\nit('<%= spec %>', () => {\n  expect.hasAssertions();\n});\n";
export declare const specBlock: import("lodash").TemplateExecutor;
export declare const setSpecItems: (specs: string[]) => string;
