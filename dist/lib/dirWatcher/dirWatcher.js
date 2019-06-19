"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_1 = __importDefault(require("chokidar"));
var createTestFile_1 = require("../createTestFile");
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
var setExtensions = function (ext) {
    return ext.length === 1 ? ext[0] : "{" + ext.join("|") + "}";
};
exports.dirWatcher = function (directory, extensions) {
    var watchGlob = "./" + directory + "/**/*." + setExtensions(extensions);
    var watcher = chokidar_1.default.watch(watchGlob, WATCHER_CONFIG);
    watcher.on("ready", function () { return onWatcherReady(watcher); }).on("add", onAdd);
};
