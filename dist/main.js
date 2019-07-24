"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var getConfigFileData_1 = require("./lib/getConfigFileData");
var configFileOptions = getConfigFileData_1.getConfigFileData();
var options = __assign({}, (configFileOptions ? configFileOptions : {}), lib_1.getCliOptions());
var atf = new lib_1.AutoTestFile(options, !!configFileOptions);
if (atf.optionsValid) {
    atf.setInitialFiles();
    atf.runFileWatcher();
}
