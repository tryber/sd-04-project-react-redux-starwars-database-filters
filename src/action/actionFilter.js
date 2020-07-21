export const FILTER_TABLE = 'FILTER_TABLE';
export const FILTER_COMBINER = 'FILTER_COMBINER';

export const filterTable = (name) => ({
  type: FILTER_TABLE,
  name: name.toLowerCase(),
});

export const filterCombiner = (column, compar, number) => ({
  type: FILTER_COMBINER,
  column,
  compar,
  number,
});
