export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';

export const filterByName = (filter) => ({
  type: FILTER_BY_NAME,
  filter,
});

export const filterByNumericValue = (filter) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  filter,
});
