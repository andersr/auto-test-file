"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFileName_1 = require("./getFileName");
var createTestFile_1 = require("./createTestFile");
// import nodepath from "path";
exports.dirWatcher = function (glob, extensions) {
    var chokidar = require("chokidar");
    // /^\.\w+|\.test\.|index\./
    var watcher = chokidar.watch(glob, {
        ignored: [/\.test\./, /index\./, /^\.\w+/],
        ignoreInitial: true,
        persistent: true
    });
    function onWatcherReady() {
        console.info("Watching \"" + glob + "\"");
    }
    // Declare the listeners of the watcher
    watcher
        .on('ready', onWatcherReady)
        .on('add', function (path) {
        console.log('File', path, 'has been added');
        var dirparts = path.split("/");
        console.log('dirparts: ', dirparts.length);
        var currentDr = dirparts.splice(dirparts.length - 1, 1);
        console.log('currentPath: ', dirparts);
        var fileName = getFileName_1.getFileName(path);
        var parts = fileName.split(".");
        // console.log("dir: ", __dirname);
        console.log('fileName: ', fileName);
        createTestFile_1.createTestFile({ path: dirparts.join("/"), fileName: fileName });
    });
};
// StartWatcher("./watchedDir/**/*.{ts|tsx}")
