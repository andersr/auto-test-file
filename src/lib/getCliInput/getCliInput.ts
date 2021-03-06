import inquirer from 'inquirer';
import { fileNameFromPath } from '../fileNameFromPath';

export const getCliInput = (filePath: string, handleInput: (answers: any) => void) => {
  console.log(`Enter specs for ${fileNameFromPath(filePath)} (comma-separated, return to skip)`);
  inquirer
    .prompt([
      {
        message: ">",
        name: 'specs',
        type: 'input',
      },
    ])
    .then((answers: any) => {
      handleInput(answers);
    })
    .catch(err => console.log('error: ', err));

};
