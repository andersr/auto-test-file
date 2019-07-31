import { getSpecsFromInput } from './getSpecsFromInput';

describe('getSpecsFromInput', () => {
  it('returns an empty array if input.specs is not defined or if input.specs is empty', () => {
    const NO_SPECS = {
    };
    const EMPTY_SPECS = {
      specs: '',
    };

    expect(getSpecsFromInput(NO_SPECS)).toStrictEqual([]);
    expect(getSpecsFromInput(EMPTY_SPECS)).toStrictEqual([]);
  });

  it('returns an array of strings from a comma-separated string', () => {
    const WITH_SPECS = {
      specs: 'first spec,second spec,third spec',
    };
    const expected = [
      'first spec',
      'second spec',
      'third spec',
    ];
    expect(getSpecsFromInput(WITH_SPECS)).toStrictEqual(expected);
  });

  it('excludes empty specs', () => {
    const WITH_SPECS = {
      specs: 'first spec,    ,second spec,third spec,',
    };
    const expected = [
      'first spec',
      'second spec',
      'third spec',
    ];
    expect(getSpecsFromInput(WITH_SPECS)).toStrictEqual(expected);
  });
});
