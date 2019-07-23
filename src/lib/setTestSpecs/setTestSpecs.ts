import { removeQuoteMarks } from '../removeQuoteMarks/removeQuoteMarks';
import { template } from 'lodash';

const DEFAULT_SPEC = 'does things';

export const SPEC_BLOCK_TEMPLATE = `
it('<%= spec %>', () => {
  expect.hasAssertions();
});
`

export const specBlock = template(SPEC_BLOCK_TEMPLATE);

const setSpecBlock = (spec: string) => specBlock({ spec: removeQuoteMarks(spec).trim() });

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
