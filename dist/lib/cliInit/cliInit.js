"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var optionsValid_1 = require("../optionsValid");
var chokidar_1 = __importDefault(require("chokidar"));
var setWatchGlob_1 = require("../setWatchGlob");
var handleAddFile_1 = require("../handleAddFile");
var DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];
var WATCHER_CONFIG = {
    ignored: DEFAULT_WATCH_IGNORE,
    ignoreInitial: true,
    persistent: true,
};
exports.cliInit = function (options) {
    var unlinked;
    if (!optionsValid_1.optionsValid(options)) {
        return;
    }
    var watcher = chokidar_1.default.watch(setWatchGlob_1.setWatchGlob(options), WATCHER_CONFIG);
    watcher
        .on('ready', function () {
        console.info("Watching \"" + options.directory + "\"");
    })
        .on('add', function (filePath) {
        console.log('ADD filePath: ', filePath);
        // do not add file if unlink is true and file name is identical
        if (unlinked !== filePath) {
            handleAddFile_1.handleAddFile(filePath, options);
        }
        unlinked = undefined;
    })
        .on('unlink', function (filePath) {
        unlinked = filePath;
        console.log("UNLINKL " + filePath);
    });
};
