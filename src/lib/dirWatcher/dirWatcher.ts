import chokidar, { FSWatcher } from "chokidar";
import { createTestFile } from "../createTestFile";
import { setExtensionsGlob } from "../setExtensionsGlob";

// ignore node_modules .test. and dot files
const DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];

const WATCHER_CONFIG = {
  ignored: DEFAULT_WATCH_IGNORE,
  ignoreInitial: true,
  persistent: true
};

const onWatcherReady = (watcher: FSWatcher) => {
  const paths = watcher.getWatched();
  console.info(`Watching "${Object.keys(paths)}"`);
};

const onAdd = (filePath: string) => {
  // console.log("File", filePath, "has been added");
  createTestFile(filePath);
};

export const dirWatcher = (directory: string, extensions: string[]) => {
  const watchGlob = `./${directory}/**/*.${setExtensionsGlob(extensions)}`;
  const watcher = chokidar.watch(watchGlob, WATCHER_CONFIG);

  watcher.on("ready", () => onWatcherReady(watcher)).on("add", onAdd);
};
