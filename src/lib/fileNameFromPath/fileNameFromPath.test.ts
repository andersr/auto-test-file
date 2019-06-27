import { fileNameFromPath } from './fileNameFromPath';

describe('fileNameFromPath', () => {
  it('returns a file name from a file path', () => {
    const input = './src/components/MyComponent.tsx';
    const expected = 'MyComponent';
    expect(fileNameFromPath(input)).toStrictEqual(expected);
  });
});
