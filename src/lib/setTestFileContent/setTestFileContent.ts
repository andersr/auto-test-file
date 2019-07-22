import { ITestFile } from '../../';
import { setSpecItems } from '../setTestSpecs';

export const setTestFileContent = ({ fileName, specs }: ITestFile): string => {
  return (
    `import { ${fileName} } from './${fileName}';

    describe('${fileName}', () => {
      ${setSpecItems(specs)}
    });

  `);
};
