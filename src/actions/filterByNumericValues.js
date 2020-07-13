export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUE';

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});
