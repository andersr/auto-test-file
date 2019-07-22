// import { setSpecItems } from '../setTestSpecs';
import { template } from 'lodash';

export const MY_TEMPLATE = template(`import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%=  setSpecItems(specs) %>
});

`);
