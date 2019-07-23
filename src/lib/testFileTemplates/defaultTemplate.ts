// import { setSpecItems } from '../setTestSpecs';
import { template } from 'lodash';

// export const DEFAULT_TEMPLATE = (fileName: string, specs: string[]) => {

//  return (
//   `import { ${fileName} } from './${fileName}';

// describe('${fileName}', () => {
//    ${setSpecItems(specs)}
// });

// `);
// };

export const defaultTemplate = template(`import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%= setSpecItems(specs) %>
});

`);
