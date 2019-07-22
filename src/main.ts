import { getCliOptions, watcherInit } from './lib';

const options = getCliOptions();
watcherInit(options);

// if (optionsValid(options)) {
//   // TODO: confirm that this is a valid directory

//   // PURPOSE OF GLOB HERE IS JUST TO COLLECT INITIAL FILES
//   // glob(`${options.directory}/**/*`,
//   //      (err: Error | null, matches: string[]) => watcherInit({ err, matches, options }));

// }
