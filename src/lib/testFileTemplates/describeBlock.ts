import { template } from 'lodash';

export const DESCRIBE_BLOCK_TEMPLATE = `import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%= setSpecItems(specs) %>
});

`;

export const describeBlock = template(DESCRIBE_BLOCK_TEMPLATE);
