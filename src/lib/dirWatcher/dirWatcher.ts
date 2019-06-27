import chokidar from 'chokidar';
import { setExtensionsGlob } from '../setExtensionsGlob';

// ignore node_modules .test. and dot files
const DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];

const WATCHER_CONFIG = {
  ignored: DEFAULT_WATCH_IGNORE,
  ignoreInitial: true,
  persistent: true,
};

// const onWatcherReady = (watcher: FSWatcher) => {
//   const paths = watcher.getWatched();
//   console.info(`Watching "${Object.keys(paths)}"`);
// };

// const onAdd = (filePath: string, watcher: FSWatcher) => {
//   console.log('File', filePath, 'has been added');
//   // createTestFile(filePath); - if option, close watcher, start wach
//   watcher.close();
//   getCliInput(filePath);

// };

// const onChange = (filePath: string) => {
//   console.log('File', filePath, 'changed');
//   // createTestFile(filePath);
// };

export const dirWatcher = (directory: string, extensions: string[]) => {
  const watchGlob = `./${directory}/**/*.${setExtensionsGlob(extensions)}`;
  return chokidar.watch(watchGlob, WATCHER_CONFIG);

  // watcher.on('ready', () => onWatcherReady(watcher))
  //   .on('add', (filePath: string) => onAdd(filePath, watcher))
  //   .on('change', onChange);
};
