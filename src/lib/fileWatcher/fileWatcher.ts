import { IConfigOptions } from '../../models';
import chokidarWatcher from 'chokidar-watcher';
import { setWatchGlob } from '../setWatchGlob';
import { handleAddFile } from '../handleAddFile';

const DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];

export const fileWatcher = (options: IConfigOptions, initialFiles: string[]) => {

  chokidarWatcher(
    setWatchGlob(options), {
      usePolling: true,
      interval: 100,
      ignored: DEFAULT_WATCH_IGNORE,
    },
    {
      add(filePath: string) {
        if (!initialFiles.includes(filePath)) {
          handleAddFile(filePath, options);
        }
      },
    });

  // TODO: display on actual ready
  console.log(`Watching '${options.directory}'`);
};