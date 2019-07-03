import { getCliOptions, fileWatcher, optionsValid } from './lib';
import glob from 'glob';

const options = getCliOptions();

// TODO: replace cb with async model
const cliInit = (err: Error | null, matches: string[]) => {
  let initialFiles = [];
  if (err) {
    console.log('Get file paths error: ', err);
  }
  initialFiles = [...matches];
  fileWatcher(options, initialFiles);
};

if (optionsValid(options)) {
 // TODO: confirm that this is a valid directory
  glob(`${options.directory}/**/*`, cliInit);

}
