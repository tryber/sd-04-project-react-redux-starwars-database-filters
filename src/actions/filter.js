const FILTER_BY_NAME = 'FILTER_BY_NAME';
const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';

const filterByName = (data) => ({
  type: FILTER_BY_NAME,
  data,
});

const filterByNumeric = (data) => ({
  type: FILTER_BY_NUMERIC,
  data,
});

export { filterByName, filterByNumeric };
