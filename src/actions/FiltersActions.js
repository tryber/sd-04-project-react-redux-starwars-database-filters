export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';
export const ORDER_BY_COLUMN = 'ORDER_BY_COLUMN';
export const REMOVE_NUMERIC_FILTER = 'REMOVE_NUMERIC_FILTER';

export const filterByName = (filter) => ({
  type: FILTER_BY_NAME,
  filter,
});

export const filterByNumericValue = (filter) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  filter,
});

export const orderByColumn = (filter) => ({
  type: ORDER_BY_COLUMN,
  filter,
});

export const removeNumericFilter = (filter) => ({
  type: REMOVE_NUMERIC_FILTER,
  filter,
});
