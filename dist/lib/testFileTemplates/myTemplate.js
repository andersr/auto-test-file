"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { setSpecItems } from '../setTestSpecs';
var lodash_1 = require("lodash");
exports.MY_TEMPLATE = lodash_1.template("import { <%= fileName %> } from './<%= fileName %>';\n\ndescribe('<%= fileName %>', () => {\n   <%=  setSpecItems(specs) %>\n});\n\n");
