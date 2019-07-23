import { setSpecItems } from '../setTestSpecs';
import { describeBlock } from '../testFileTemplates';

export const setTestFileContent = (fileName: string, specs: string[]): string => {
  return describeBlock({ fileName, specs, setSpecItems });
};
