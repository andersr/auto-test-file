"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var options = lib_1.getCliOptions();
var atf = new lib_1.AutoTestFile(options);
if (atf.optionsValid) {
    atf.setInitialFiles();
    atf.runFileWatcher();
}
