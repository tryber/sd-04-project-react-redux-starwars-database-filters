import {
  FILTERED_NAME,
  FILTERED_NUMERIC_COLUMN,
  FILTERED_NUMERIC_COMPARISON,
  FILTERED_NUMERIC_VALUE,
  FILTERED_VALUES
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

export const filterValues = (column, comparison, value) => ({
  type: FILTERED_VALUES,
  column,
  comparison,
  value,
});
