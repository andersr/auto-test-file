import { setSpecItems } from '../setTestSpecs';
import { defaultTemplate } from '../testFileTemplates';

export const setTestFileContent = (fileName: string, specs: string[]): string => {
  return defaultTemplate({ fileName, specs, setSpecItems });
};
