import { FILTERED_NAME, FILTERED_VALUES } from './types';

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
