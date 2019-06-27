import { IConfigOptions } from '../../models';
import { createTestFile } from '../createTestFile';
import { getCliInput } from '../getCliInput';
import { getSpecsFromInput } from '../getSpecsFromInput';

export const handleAddFile = (filePath: string, options: IConfigOptions) => {
  if (options.noSpecInput) {
    createTestFile(filePath, []);
  } else {
    getCliInput(filePath, answers => createTestFile(filePath, getSpecsFromInput(answers)));
  }
};
