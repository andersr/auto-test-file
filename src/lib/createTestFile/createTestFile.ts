import createFile from "create-file";
import path from "path";
import { setTestFileContent } from "../setTestFileContent";
import { removeExtension } from "../removeExtension";
import { setTestFilePath } from "../setTestFilePath";

export const createTestFile = (filePath: string) => {
  const fileName = removeExtension(path.basename(filePath));
  const testFilePath = setTestFilePath(filePath, fileName);

  createFile(testFilePath, setTestFileContent(fileName), function (err: any) {
    if (err) {
      console.log("err: ", err);
    }
  });
};
