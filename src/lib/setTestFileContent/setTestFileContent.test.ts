import { setTestFileContent } from './setTestFileContent';
import { template } from 'lodash';
import { DESCRIBE_BLOCK_TEMPLATE, SPEC_BLOCK_TEMPLATE } from '../templates';

const removeWhiteSpace = (str: string) => str.replace(/\s+/g, ' ').trim();

describe('setTestFileContent', () => {

  it('it returns a block of text with a default spec if no specs are passed in', () => {
    const fileName = 'myUtil';
    const expected = removeWhiteSpace(`import { myUtil } from './myUtil';

    describe('myUtil', () => {
        it('does things', () => {
            expect.hasAssertions();
        });
    });

    `);

    const describeTemplate = template(DESCRIBE_BLOCK_TEMPLATE);
    const specTemplate = template(SPEC_BLOCK_TEMPLATE);

    const content = removeWhiteSpace(setTestFileContent({
      fileName,
      specs: [],
      specTemplate,
      describeTemplate,
    }));
    expect(content).toEqual(expected);
  });

  it('it returns a block of text with it blocks for each spec passed in', () => {
    const fileName = 'truncateString';
    const specs = [
      'it returns the complete string if shorter than max value',
      'it returns a truncated string if >= max value',
      'it appends ellipses to a truncated string',
    ];
    const expected = removeWhiteSpace(`import { truncateString } from './truncateString';

    describe('truncateString', () => {
        it('it returns the complete string if shorter than max value', () => {
            expect.hasAssertions();
        });
        it('it returns a truncated string if >= max value', () => {
          expect.hasAssertions();
       });
       it('it appends ellipses to a truncated string', () => {
        expect.hasAssertions();
     });
    });

    `);

    const describeTemplate = template(DESCRIBE_BLOCK_TEMPLATE);
    const specTemplate = template(SPEC_BLOCK_TEMPLATE);

    const content = removeWhiteSpace(setTestFileContent({
      fileName,
      specs,
      specTemplate,
      describeTemplate,
    }));
    expect(content).toEqual(expected);
  });

});
