"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_1 = __importDefault(require("chokidar"));
var setExtensionsGlob_1 = require("../setExtensionsGlob");
// ignore node_modules .test. and dot files
var DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];
var WATCHER_CONFIG = {
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
exports.dirWatcher = function (directory, extensions) {
    var watchGlob = "./" + directory + "/**/*." + setExtensionsGlob_1.setExtensionsGlob(extensions);
    return chokidar_1.default.watch(watchGlob, WATCHER_CONFIG);
    // watcher.on('ready', () => onWatcherReady(watcher))
    //   .on('add', (filePath: string) => onAdd(filePath, watcher))
    //   .on('change', onChange);
};
