import { optionsValid } from "./optionsValid";
import { IOptionResults } from "../../models";
import { NO_EXTENSIONS_MESSAGE, NO_DIRECTORY_MESSAGE, UNKNOWN_OPTION_MESSAGE } from "../messages";


describe("optionsValid", () => {
  const spyLog = jest.spyOn(console, 'log');

  beforeEach(() => {
    spyLog.mockReset();
  });


  it("it returns true if options is defined AND options has a directory value AND options has one or more extension values", () => {
    const VALID_OPTIONS: IOptionResults = {
      directory: "src",
      extensions: ["ts", "tsx"]
    };
    expect(optionsValid(VALID_OPTIONS)).toBeTruthy();
  });

  it("it returns false if options are undefined", () => {
    expect(optionsValid(undefined as unknown as IOptionResults)).toBeFalsy();

  });
  it("it returns false if there is an _unknown option", () => {
    const UNKNOWN_OPTION: Partial<IOptionResults> = {
      _unknown: ["foo"],
      directory: "src",
      extensions: ["ts", "tsx"]
    };
    expect(optionsValid(UNKNOWN_OPTION as IOptionResults)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(UNKNOWN_OPTION_MESSAGE);
  });

  it("it returns false if there is no directory option", () => {

    const NO_DIRECTORY: Partial<IOptionResults> = {
      extensions: ["ts", "tsx"]
    };
    expect(optionsValid(NO_DIRECTORY as IOptionResults)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(NO_DIRECTORY_MESSAGE);

  });
  it("it returns false if there are no extensions", () => {

    const NO_EXTENSIONS: Partial<IOptionResults> = {
      directory: "src",
    };
    expect(optionsValid(NO_EXTENSIONS as IOptionResults)).toBeFalsy();
    expect(spyLog).toHaveBeenCalledWith(NO_EXTENSIONS_MESSAGE);
  });

});
