// import { CommandLineOptions } from "command-line-args";

// export const getWatchGlob = (
//   options: CommandLineOptions
// ): string | undefined => {
//   // TODO - refactor - handle missing required options
//   if (!options.directories) {
//     console.log("Please include one or more directories to watch.");
//     return;
//   }

//   if (!options.extensions) {
//     console.log("Please include one or more file types to watch.");
//     return;
//   }
//   // get directories
//   // get extensions
//   // create glob
//   // call dirWatcher

//   const extensions = options.extensions[0];
//   console.log("options.directories: ", options.directories);
//   const cwd = process.env.INIT_CWD;
//   console.log("cwd: ", cwd);
//   const watchGlob = `${cwd}/${options.directories[0]}/**/*.${extensions}`;

//   return watchGlob;
//   // return options;
// };

// // const options = commandLineArgs(optionDefinitions, {
// //     partial: true,
// //     stopAtFirstUnknown: true
// // });
// // if (options._unknown) {
// //     console.log(`Unknown params  Please try again.`);
// // } else {
// //     console.log('options: ', options);
// //     if (options && options.directories) {
// //         // const path = `./${options.directory}`;
// //         const extensions = options.extensions && options.extensions.join("|");
// //         const glob = `./${options.directories}/**/*.{${extensions}}`;

// //         console.log('glob: ', glob);
// //         // console.log('glob: ', options.extensions);

// //         dirWatcher(glob, options.extensions)
// //     }
// // }
