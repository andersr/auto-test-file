"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_watcher_1 = __importDefault(require("chokidar-watcher"));
var setWatchGlob_1 = require("../setWatchGlob");
var handleAddFile_1 = require("../handleAddFile");
var DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];
exports.fileWatcher = function (options, initialFiles) {
    chokidar_watcher_1.default(setWatchGlob_1.setWatchGlob(options), {
        usePolling: true,
        interval: 100,
        ignored: DEFAULT_WATCH_IGNORE,
    }, {
        add: function (filePath) {
            if (!initialFiles.includes(filePath)) {
                handleAddFile_1.handleAddFile(filePath, options);
            }
        },
    });
    // TODO: display on actual ready
    console.log("Watching '" + options.directory + "'");
};
