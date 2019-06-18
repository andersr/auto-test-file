import { getFileName } from "./getFileName";
import { createTestFile } from "./createTestFile";
// import nodepath from "path";

export const dirWatcher = (glob: string, extensions: string[]) => {
    var chokidar = require("chokidar");
    // /^\.\w+|\.test\.|index\./
    var watcher = chokidar.watch(glob, {
        ignored: [/\.test\./, /index\./, /^\.\w+/],
        ignoreInitial: true,
        persistent: true
    });

    function onWatcherReady() {
        console.info(`Watching "${glob}"`);
    }

    // Declare the listeners of the watcher
    watcher
        .on('ready', onWatcherReady)
        .on('add', function (path: string) {
            console.log('File', path, 'has been added');

            const dirparts = path.split("/");
            console.log('dirparts: ', dirparts.length);
            const currentDr = dirparts.splice(dirparts.length - 1, 1);
            console.log('currentPath: ', dirparts);

            const fileName = getFileName(path);
            const parts = fileName.split(".");
            // console.log("dir: ", __dirname);

            console.log('fileName: ', fileName);
            createTestFile({ path: dirparts.join("/"), fileName })
        })
}


// StartWatcher("./watchedDir/**/*.{ts|tsx}")
