"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWatchGlob = function (options) {
    // TODO - refactor - handle missing required options
    if (!options.directories) {
        console.log("Please include one or more directories to watch.");
        return;
    }
    if (!options.extensions) {
        console.log("Please include one or more file types to watch.");
        return;
    }
    // get directories
    // get extensions
    // create glob
    // call dirWatcher 
    var extensions = options.extensions && options.extensions.join("|");
    var watchGlob = "./" + options.directories + "/**/*.{" + extensions + "}";
    return watchGlob;
    // return options;
};
// const options = commandLineArgs(optionDefinitions, {
//     partial: true,
//     stopAtFirstUnknown: true
// });
// if (options._unknown) {
//     console.log(`Unknown params  Please try again.`);
// } else {
//     console.log('options: ', options);
//     if (options && options.directories) {
//         // const path = `./${options.directory}`;
//         const extensions = options.extensions && options.extensions.join("|");
//         const glob = `./${options.directories}/**/*.{${extensions}}`;
//         console.log('glob: ', glob);
//         // console.log('glob: ', options.extensions);
//         dirWatcher(glob, options.extensions)
//     }
// }
