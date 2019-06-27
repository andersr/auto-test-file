import { removeExtension } from './removeExtension';

describe('removeExtension', () => {

  it('it returns a string with the last dot and everything following removed', () => {
    const input = 'foo.bar';
    const expected = 'foo';
    expect(removeExtension(input)).toStrictEqual(expected);
  });

  it('it works for a string that ends with a dot', () => {
    const input = 'foo.';
    const expected = 'foo';
    expect(removeExtension(input)).toStrictEqual(expected);
  });

  it('it works for a string with multiple dots', () => {
    const input = 'foo.bar.baz.boo';
    const expected = 'foo.bar.baz';
    expect(removeExtension(input)).toStrictEqual(expected);
  });

});
