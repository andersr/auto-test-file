"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_watcher_1 = __importDefault(require("chokidar-watcher"));
var create_file_1 = __importDefault(require("create-file"));
var glob_1 = __importDefault(require("glob"));
var constants_1 = require("../constants");
var fileNameFromPath_1 = require("../fileNameFromPath");
var getCliInput_1 = require("../getCliInput");
var getSpecsFromInput_1 = require("../getSpecsFromInput");
var setTestFilePath_1 = require("../setTestFilePath");
var setWatchGlob_1 = require("../setWatchGlob");
var validateOptions_1 = require("../validateOptions");
var lodash_1 = require("lodash");
var setTestFileContent_1 = require("../setTestFileContent");
var AutoTestFile = /** @class */ (function () {
    function AutoTestFile(options) {
        this.options = options;
        this.optionsValid = validateOptions_1.validateOptions(options);
        this.describeTemplate = lodash_1.template(options.describeTemplate ? options.describeTemplate : constants_1.DESCRIBE_BLOCK_TEMPLATE);
        this.specTemplate = lodash_1.template(options.specTemplate ? options.specTemplate : constants_1.SPEC_BLOCK_TEMPLATE);
        this.initialFiles = [];
    }
    AutoTestFile.prototype.fileWatcherInit = function () {
        this.setInitialFiles();
    };
    AutoTestFile.prototype.setInitialFiles = function () {
        var _this = this;
        glob_1.default(this.options.directory + "/**/*", {}, function (err, files) {
            if (err) {
                console.log("Error: ", err);
                return;
            }
            _this.initialFiles = files;
            _this.runFileWatcher();
        });
    };
    AutoTestFile.prototype.runFileWatcher = function () {
        var config = {
            usePolling: true,
            interval: 100,
            ignored: constants_1.DEFAULT_WATCH_IGNORE,
        };
        var handleAdd = this.handleAddFile.bind(this);
        chokidar_watcher_1.default(setWatchGlob_1.setWatchGlob(this.options), config, {
            add: handleAdd,
        });
        // TODO: display on actual ready
        console.log("Auto Test File: Watching '" + this.options.directory + "'");
    };
    AutoTestFile.prototype.handleAddFile = function (filePath) {
        var _this = this;
        if (this.initialFiles.includes(filePath)) {
            return;
        }
        if (this.options.noSpecInput) {
            this.createTestFile(filePath, []);
        }
        else {
            getCliInput_1.getCliInput(filePath, function (answers) { return _this.createTestFile(filePath, getSpecsFromInput_1.getSpecsFromInput(answers)); });
        }
    };
    AutoTestFile.prototype.createTestFile = function (filePath, specs) {
        var fileName = fileNameFromPath_1.fileNameFromPath(filePath);
        var testFilePath = setTestFilePath_1.setTestFilePath(filePath, fileName);
        create_file_1.default(testFilePath, setTestFileContent_1.setTestFileContent({
            fileName: fileName,
            specs: specs,
            describeTemplate: this.describeTemplate,
            specTemplate: this.specTemplate
        }), function (err) {
            if (err) {
                console.log('err: ', err);
            }
            else {
                console.log("Test file added for '" + fileName + "'");
            }
        });
    };
    return AutoTestFile;
}());
exports.AutoTestFile = AutoTestFile;
