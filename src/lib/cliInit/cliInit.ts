import { IConfigOptions } from '../../models';
import { optionsValid } from '../optionsValid';
import chokidar from 'chokidar';
import { setWatchGlob } from '../setWatchGlob';
import { handleAddFile } from '../handleAddFile';

const DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];

const WATCHER_CONFIG = {
  ignored: DEFAULT_WATCH_IGNORE,
  ignoreInitial: true,
  persistent: true,
};

export const cliInit = (options: IConfigOptions) => {
  let unlinked: string | undefined;

  if (!optionsValid(options)) {
    return;
  }

  const watcher = chokidar.watch(setWatchGlob(options), WATCHER_CONFIG);

  watcher
    .on('ready', () => {
      console.info(`Watching "${options.directory}"`);
    })
    .on('add', (filePath: string) => {
      console.log('ADD filePath: ', filePath);
      // do not add file if unlink is true and file name is identical
      if (unlinked !== filePath) {

        handleAddFile(filePath, options);
      }
      unlinked = undefined;
    })
    .on('unlink', (filePath: string) => {
      unlinked = filePath;
      console.log(`UNLINKL ${filePath}`);
    });
};
