import { setSpecItems } from '../setTestSpecs';
import { DEFAULT_TEMPLATE } from '../testFileTemplates';

export const setTestFileContent = (fileName: string, specs: string[]): string => {
  return DEFAULT_TEMPLATE({ fileName, specs, setSpecItems });
};
