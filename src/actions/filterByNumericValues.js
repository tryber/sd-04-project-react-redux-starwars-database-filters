export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUE';
export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const RESET_FILTER = 'RESET_FILTER';
export const resetFilter = (filters) => ({
  type: RESET_FILTER,
  filters,
});
