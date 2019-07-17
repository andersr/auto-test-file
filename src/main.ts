import { getCliOptions, optionsValid, watcherInit } from './lib';
import glob from 'glob';

const options = getCliOptions();

if (optionsValid(options)) {
  // TODO: confirm that this is a valid directory
  glob(`${options.directory}/**/*`,
       (err: Error | null, matches: string[]) => watcherInit({ err, matches, options }));

}
