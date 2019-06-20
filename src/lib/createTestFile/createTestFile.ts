import createFile from "create-file";
import path from "path";
import { setTestFileContent } from "../setTestFileContent";
import { removeExtension } from "../removeExtension";

export const createTestFile = (filePath: string) => {
  const fileName = path.basename(filePath);
  const extension = path.extname(filePath);
  const noExtension = removeExtension(fileName);
  const projectDir = process.env.INIT_CWD;
  const projectPath = `${projectDir}/${path.dirname(filePath)}`;
  const newFile = `${projectPath}/${noExtension}.test${extension}`;

  createFile(newFile, setTestFileContent(noExtension), function (err: any) {
    if (err) {
      console.log("err: ", err);
    }
  });
};
