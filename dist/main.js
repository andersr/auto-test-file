"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var glob_1 = __importDefault(require("glob"));
var options = lib_1.getCliOptions();
// const cliInit = (err: Error | null, matches: string[]) => {
//   let initialFiles = [];
//   if (err) {
//     console.log('Get file paths error: ', err);
//   }
//   initialFiles = [...matches];
//   fileWatcher(options, initialFiles);
// };
if (lib_1.optionsValid(options)) {
    // TODO: confirm that this is a valid directory
    glob_1.default(options.directory + "/**/*", function (err, matches) { return lib_1.watcherInit({ err: err, matches: matches, options: options }); });
}
