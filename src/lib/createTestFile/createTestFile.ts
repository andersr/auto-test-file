import createFile from 'create-file';
import { setTestFileContent } from '../setTestFileContent';
import { setTestFilePath } from '../setTestFilePath';
import { fileNameFromPath } from '../fileNameFromPath/fileNameFromPath';

export const createTestFile = (filePath: string, specs: string[]) => {
  const fileName = fileNameFromPath(filePath);
  const testFilePath = setTestFilePath(filePath, fileName);

  createFile(testFilePath, setTestFileContent(fileName, specs), (err: any) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log(`Test file added for ${fileName}`);
    }
  });
};
