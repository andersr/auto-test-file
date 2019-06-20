import { setTestFilePath } from "./setTestFilePath";

// const removeWhiteSpace = (str: string) => str.replace(/\s+/g, ' ').trim();

describe("setTestFilePath", () => {

    afterEach(() => {
        delete process.env.INIT_CWD;
    });

    it("it generates a full test file path", () => {
        const projectDir = "/Users/someuser/dev/my_project";
        const filePath = "src/myFile.ts";
        process.env.INIT_CWD = projectDir;
        const expected = "/Users/someuser/dev/my_project/src/myFile.test.ts";

        // const content = removeWhiteSpace(setTestFilePath(input));
        expect(setTestFilePath(filePath)).toEqual(expected);
    });

});
