import { setTestFilePath } from './setTestFilePath';

describe('setTestFilePath', () => {

  afterEach(() => {
    delete process.env.INIT_CWD;
  });

  it('it generates a full test file path', () => {
    const projectDir = '/Users/someuser/dev/my_project';
    const filePath = 'src/myFile.ts';
    const fileName = 'myFile';
    process.env.INIT_CWD = projectDir;
    const expected = '/Users/someuser/dev/my_project/src/myFile.test.ts';

    expect(setTestFilePath(filePath, fileName)).toEqual(expected);
  });

});
