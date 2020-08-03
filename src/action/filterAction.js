const filterByName = (data) => ({
  type: 'FILTER_BY_NAME',
  data,
});

const filterByNumeric = (data) => ({
  type: 'FILTER_BY_NUMERIC',
  data,
});

export { filterByName, filterByNumeric };