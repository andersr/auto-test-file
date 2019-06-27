import { setWatchGlob } from './setWatchGlob';
import { IConfigOptions } from '../../models';

describe('setWatchGlob', () => {
  it('returns a watch glob based on config options', () => {
    const CONFIG_OPTIONS: IConfigOptions = {
      directory: 'src',
      extensions: ['js', 'jsx'],
    };
    const expected = './src/**/*.{js|jsx}';
    expect(setWatchGlob(CONFIG_OPTIONS)).toStrictEqual(expected);
  });
});
