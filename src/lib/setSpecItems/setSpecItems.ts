import { removeQuoteMarks } from '../removeQuoteMarks';
import { DEFAULT_SPEC } from '../constants';
import { TemplateExecutor } from 'lodash';

const setSpecBlock = (spec: string, specTemplate: TemplateExecutor) => specTemplate({ spec: removeQuoteMarks(spec).trim() });

export const setSpecItems = (specs: string[], specTemplate: TemplateExecutor) => {
 if (specs.length === 0) {
  return setSpecBlock(DEFAULT_SPEC, specTemplate);
 }
 // {
 let specBlocks = '';
 for (const spec of specs) {
  specBlocks += setSpecBlock(spec, specTemplate);
 }
 return specBlocks;

};
