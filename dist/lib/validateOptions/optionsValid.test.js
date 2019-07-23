"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var optionsValid_1 = require("./optionsValid");
var messages_1 = require("../messages");
describe('optionsValid', function () {
    var spyLog = jest.spyOn(console, 'log');
    beforeEach(function () {
        spyLog.mockReset();
    });
    it('it returns true if options has a directory and extension value', function () {
        var VALID_SINGLE_OPTIONS = {
            directory: 'src',
            extensions: ['ts'],
        };
        expect(optionsValid_1.optionsValid(VALID_SINGLE_OPTIONS)).toBeTruthy();
        var VALID_MULTI_OPTIONS = {
            directory: 'src',
            extensions: ['ts', 'tsx'],
        };
        expect(optionsValid_1.optionsValid(VALID_MULTI_OPTIONS)).toBeTruthy();
    });
    it('it returns false if options are undefined', function () {
        expect(optionsValid_1.optionsValid(undefined)).toBeFalsy();
    });
    it('it returns false if there is an _unknown option', function () {
        var UNKNOWN_OPTION = {
            _unknown: ['foo'],
            directory: 'src',
            extensions: ['ts', 'tsx'],
        };
        expect(optionsValid_1.optionsValid(UNKNOWN_OPTION)).toBeFalsy();
        expect(spyLog).toHaveBeenCalledWith(messages_1.UNKNOWN_OPTION_MESSAGE);
    });
    it('it returns false if there is no directory option', function () {
        var NO_DIRECTORY = {
            extensions: ['ts', 'tsx'],
        };
        expect(optionsValid_1.optionsValid(NO_DIRECTORY)).toBeFalsy();
        expect(spyLog).toHaveBeenCalledWith(messages_1.NO_DIRECTORY_MESSAGE);
    });
    it('it returns false if there are no extensions', function () {
        var NO_EXTENSIONS = {
            directory: 'src',
        };
        expect(optionsValid_1.optionsValid(NO_EXTENSIONS)).toBeFalsy();
        expect(spyLog).toHaveBeenCalledWith(messages_1.NO_EXTENSIONS_MESSAGE);
    });
    // it('it defaults askForSpecs to true', () => {
    //   const VALID_SINGLE_OPTIONS: IConfigOptions = {
    //     directory: 'src',
    //     extensions: ['ts'],
    //   };
    //   expect(optionsValid(NO_EXTENSIONS as IConfigOptions)).toBeFalsy();
    //   expect(spyLog).toHaveBeenCalledWith(NO_EXTENSIONS_MESSAGE);
    // });
    // it('it sets askForSpecs to false if set to false', () => {
    //   const NO_EXTENSIONS: Partial<IConfigOptions> = {
    //     directory: 'src',
    //   };
    //   expect(optionsValid(NO_EXTENSIONS as IConfigOptions)).toBeFalsy();
    //   expect(spyLog).toHaveBeenCalledWith(NO_EXTENSIONS_MESSAGE);
    // });
});
