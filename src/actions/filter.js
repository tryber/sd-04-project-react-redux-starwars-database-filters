import {
  FILTERED_NAME,
  FILTERED_NUMERIC_COLUMN,
  FILTERED_NUMERIC_COMPARISON,
  FILTERED_NUMERIC_VALUE,
} from './types';

export const filterName = (name) => ({
  type: FILTERED_NAME,
  name,
});

export const filterColumn = (column) => ({
  type: FILTERED_NUMERIC_COLUMN,
  column,
});

export const filterComparison = (comparison) => ({
  type: FILTERED_NUMERIC_COMPARISON,
  comparison,
});

export const filterValue = (value) => ({
  type: FILTERED_NUMERIC_VALUE,
  value,
});
