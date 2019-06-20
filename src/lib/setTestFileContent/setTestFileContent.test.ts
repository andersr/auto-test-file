import { setTestFileContent } from "./setTestFileContent";

const removeWhiteSpace = (str: string) => str.replace(/\s+/g, ' ').trim();

describe("setTestFileContent", () => {

    it("it returns a block of text containing the passed in string", () => {
        const input = "myUtil";
        const expected = removeWhiteSpace(`import { myUtil } from "./myUtil";

    describe("myUtil", () => {
        it("does things", () => {
            expect.hasAssertions();
        });
    });    
    
    `);

        const content = removeWhiteSpace(setTestFileContent(input));
        expect(content).toEqual(expected);
    });

});
