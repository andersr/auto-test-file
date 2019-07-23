"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { setSpecItems } from '../setTestSpecs';
var lodash_1 = require("lodash");
// export const DEFAULT_TEMPLATE = (fileName: string, specs: string[]) => {
//  return (
//   `import { ${fileName} } from './${fileName}';
// describe('${fileName}', () => {
//    ${setSpecItems(specs)}
// });
// `);
// };
exports.defaultTemplate = lodash_1.template("import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%= setSpecItems(specs) %>\n});\n\n");
