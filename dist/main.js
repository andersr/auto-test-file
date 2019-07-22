"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var options = lib_1.getCliOptions();
lib_1.watcherInit(options);
// if (optionsValid(options)) {
//   // TODO: confirm that this is a valid directory
//   // PURPOSE OF GLOB HERE IS JUST TO COLLECT INITIAL FILES
//   // glob(`${options.directory}/**/*`,
//   //      (err: Error | null, matches: string[]) => watcherInit({ err, matches, options }));
// }
