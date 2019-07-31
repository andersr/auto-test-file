import { setSpecItems } from '../setSpecItems';
import { TemplateExecutor } from 'lodash';

interface ITestFile {
  fileName: string;
  specs: string[];
  describeTemplate: TemplateExecutor;
  specTemplate: TemplateExecutor;
}

export const setTestFileContent = ({ fileName, specs, describeTemplate, specTemplate }: ITestFile): string => {
  return describeTemplate({ functionName: fileName, specs, setSpecItems, specTemplate });
};
