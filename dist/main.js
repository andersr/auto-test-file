"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCliOptions_1 = require("./lib/getCliOptions");
var getWatchGlob_1 = require("./lib/getWatchGlob");
console.log("hello world!");
var options = getCliOptions_1.getCliOptions();
if (options) {
    var watchGlob = getWatchGlob_1.getWatchGlob(options);
    console.log('watchGlob: ', watchGlob);
}
