import { setSpecItems } from '../setTestSpecs';

export const setTestFileContent = (fileName: string, specs: string[]) => {

  return (
      `import { ${fileName} } from './${fileName}';

describe('${fileName}', () => {
   ${setSpecItems(specs)}
});

`);
};
