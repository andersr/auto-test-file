export const DESCRIBE_BLOCK_TEMPLATE = `import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%= setSpecItems(specs, specTemplate) %>
});

`;
