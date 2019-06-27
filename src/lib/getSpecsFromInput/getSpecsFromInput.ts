export const getSpecsFromInput = (input: any) => input && input.specs && input.specs.trim() !== '' ?
  input.specs.split(',')
  :
  [];
