import { TemplateExecutor } from 'lodash';
interface ITestFile {
    fileName: string;
    specs: string[];
    describeTemplate: TemplateExecutor;
    specTemplate: TemplateExecutor;
}
export declare const setTestFileContent: ({ fileName, specs, describeTemplate, specTemplate }: ITestFile) => string;
export {};
