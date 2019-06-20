"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_1 = __importDefault(require("chokidar"));
var createTestFile_1 = require("../createTestFile");
var setExtensionsGlob_1 = require("../setExtensionsGlob");
// ignore node_modules .test. and dot files
var DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];
var WATCHER_CONFIG = {
    ignored: DEFAULT_WATCH_IGNORE,
    ignoreInitial: true,
    persistent: true
};
var onWatcherReady = function (watcher) {
    var paths = watcher.getWatched();
    console.info("Watching \"" + Object.keys(paths) + "\"");
};
var onAdd = function (filePath) {
    console.log("File", filePath, "has been added");
    createTestFile_1.createTestFile(filePath);
};
exports.dirWatcher = function (directory, extensions) {
    var watchGlob = "./" + directory + "/**/*." + setExtensionsGlob_1.setExtensionsGlob(extensions);
    var watcher = chokidar_1.default.watch(watchGlob, WATCHER_CONFIG);
    watcher.on("ready", function () { return onWatcherReady(watcher); }).on("add", onAdd);
};
