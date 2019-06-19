export const setTestFileContent = (fileName: string) => {

    return (
        `import { ${fileName} } from "./${fileName}";

describe("${fileName}", () => {
    it("does things", () => {
        expect.hasAssertions();
    });
});    

`)
};
