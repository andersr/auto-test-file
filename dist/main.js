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
var getConfigFileOptions_1 = require("./lib/getConfigFileOptions");
var cliOptions = lib_1.getCliOptions();
var configFileOptions = getConfigFileOptions_1.getConfigFileOptions(cliOptions.config ? cliOptions.config : undefined);
var options = __assign(__assign({}, configFileOptions), cliOptions);
var atf = new lib_1.AutoTestFile(options);
if (atf.optionsValid) {
    atf.fileWatcherInit();
}
