export const FILTER_TABLE = 'FILTER_TABLE';

export const filterTable = (name) => ({
  type: FILTER_TABLE,
  name: name.toLowerCase(),
});
