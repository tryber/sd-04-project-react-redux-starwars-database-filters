const FILTER_BY_NAME = 'FILTER_BY_NAME';
const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';
const REMOVE_FILTER = 'REMOVE_FILTER';

const filterByName = (data) => ({
  type: FILTER_BY_NAME,
  data,
});

const filterByNumeric = (data) => ({
  type: FILTER_BY_NUMERIC,
  data,
});

const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export { filterByName, filterByNumeric, removeFilter };
