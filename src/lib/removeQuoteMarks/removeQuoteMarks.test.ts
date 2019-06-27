import { removeQuoteMarks } from './removeQuoteMarks';

describe('removeQuoteMarks', () => {

  it('it returns a string with quote marks removed', () => {
    const input1 = 'foo bar';
    const expected1 = 'foo bar';
    expect(removeQuoteMarks(input1)).toStrictEqual(expected1);

    const input2 = `foo"bar""'`;
    const expected2 = 'foobar';
    expect(removeQuoteMarks(input2)).toStrictEqual(expected2);
  });

});
