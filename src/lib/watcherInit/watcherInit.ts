import { fileWatcher } from '..';
import { IConfigOptions } from '../../models';
import glob from 'glob';
import { optionsValid } from '../optionsValid';

export const watcherInit = (options: IConfigOptions) => {
  if (!optionsValid(options)) {
    return;
  }
  // TODO: test with large amount of files
  const initialFiles = glob.sync(`${options.directory}/**/*`);
  fileWatcher(options, initialFiles);
};
