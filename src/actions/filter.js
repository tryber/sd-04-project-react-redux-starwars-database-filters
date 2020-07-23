import { FILTERED_NAME, FILTERED_VALUES, DELETE_FILTER, FILTERED_ORDER } from './types';

export const filterName = (name) => ({
  type: FILTERED_NAME,
  name,
});

export const filterValues = (column, comparison, value) => ({
  type: FILTERED_VALUES,
  column,
  comparison,
  value,
});

export const deleteFilter = (column) => ({
  type: DELETE_FILTER,
  column,
});

export const filterOrder = (column, sort) => ({
  type: FILTERED_ORDER,
  column,
  sort,
});
