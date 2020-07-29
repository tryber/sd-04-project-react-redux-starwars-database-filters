export const FILTER_TABLE = 'FILTER_TABLE';
export const FILTER_COMBINER = 'FILTER_COMBINER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

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

export const removeFilter = (obj) => ({
  type: REMOVE_FILTER,
  obj,
});
