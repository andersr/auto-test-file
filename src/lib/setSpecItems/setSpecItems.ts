import { removeQuoteMarks } from '../removeQuoteMarks';
import { DEFAULT_SPEC } from '../constants';
import { TemplateExecutor } from 'lodash';

const setSpecBlock = (spec: string, specBlock: TemplateExecutor) => specBlock({ spec: removeQuoteMarks(spec).trim() });

export const setSpecItems = (specs: string[], specBlock: TemplateExecutor) => {
 if (specs.length === 0) {
  return setSpecBlock(DEFAULT_SPEC, specBlock);
 }
 // {
 let specBlocks = '';
 for (const spec of specs) {
  specBlocks += setSpecBlock(spec, specBlock);
 }
 return specBlocks;

};
