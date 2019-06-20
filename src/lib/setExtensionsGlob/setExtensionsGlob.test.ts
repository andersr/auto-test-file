import { setExtensionsGlob } from "./setExtensionsGlob";


describe("setExtensionsGlob", () => {

  it("returns a single extension as a string", () => {
    const expected = "foo";
    const SINGLE_EXTENSION: string[] = [expected];
    expect(setExtensionsGlob(SINGLE_EXTENSION)).toStrictEqual(expected);
  });

  it("returns multiple extensions in the format '{ex1|ex2|ex3}'", () => {
    const expected = "{foo|bar|baz}";
    const MULTI_EXTENSION: string[] = ["foo", "bar", "baz"];
    expect(setExtensionsGlob(MULTI_EXTENSION)).toStrictEqual(expected);

  });

});
