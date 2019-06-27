import { removeQuoteMarks } from '../removeQuoteMarks/removeQuoteMarks';

const DEFAULT_SPEC = 'does things';

const setSpecBlock = (spec: string) => `
  it('${removeQuoteMarks(spec).trim()}', () => {
    expect.hasAssertions();
  });
`;

export const setSpecItems = (specs: string[]) => {
  if (specs.length === 0) {
    return setSpecBlock(DEFAULT_SPEC);
  } {
    let specBlocks = '';
    for (const spec of specs) {
      specBlocks += setSpecBlock(spec);
    }
    return specBlocks;

  }

};
