import { optionsValid } from './optionsValid';
import { IConfigOptions } from '../../models';
import { NO_EXTENSIONS_MESSAGE, NO_DIRECTORY_MESSAGE, UNKNOWN_OPTION_MESSAGE } from '../messages';

describe('optionsValid', () => {
  const spyLog = jest.spyOn(console, 'log');

  beforeEach(() => {
    spyLog.mockReset();
  });

  it('it returns true if options has a directory and extension value', () => {
    const VALID_SINGLE_OPTIONS: IConfigOptions = {
      directory: 'src',
      extensions: ['ts'],
    };
    expect(optionsValid(VALID_SINGLE_OPTIONS)).toBeTruthy();

    const VALID_MULTI_OPTIONS: IConfigOptions = {
      directory: 'src',
      extensions: ['ts', 'tsx'],
    };
    expect(optionsValid(VALID_MULTI_OPTIONS)).toBeTruthy();
  });

  it('it returns false if options are undefined', () => {
    expect(optionsValid(undefined as unknown as IConfigOptions)).toBeFalsy();

  });
  it('it returns false if there is an _unknown option', () => {
    const UNKNOWN_OPTION: Partial<IConfigOptions> = {
      _unknown: ['foo'],
      directory: 'src',
      extensions: ['ts', 'tsx'],
    };
    expect(optionsValid(UNKNOWN_OPTION as IConfigOptions)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(UNKNOWN_OPTION_MESSAGE);
  });

  it('it returns false if there is no directory option', () => {

    const NO_DIRECTORY: Partial<IConfigOptions> = {
      extensions: ['ts', 'tsx'],
    };
    expect(optionsValid(NO_DIRECTORY as IConfigOptions)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(NO_DIRECTORY_MESSAGE);

  });
  it('it returns false if there are no extensions', () => {

    const NO_EXTENSIONS: Partial<IConfigOptions> = {
      directory: 'src',
    };
    expect(optionsValid(NO_EXTENSIONS as IConfigOptions)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(NO_EXTENSIONS_MESSAGE);
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
