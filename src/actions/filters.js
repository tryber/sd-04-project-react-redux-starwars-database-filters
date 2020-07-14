export const SEARCH = 'SEARCH';
export const NUMERIC_FILTER = 'NUMERIC_FILTER';
export const REMOVE_NUMERIC_FILTER = 'REMOVE_NUMERIC_FILTER';

export const search = (payload) => ({
  type: SEARCH,
  payload,
});

export const numericFilter = (payload) => ({
  type: NUMERIC_FILTER,
  payload,
});

export const removeNumericFilter = (payload) => ({
  type: REMOVE_NUMERIC_FILTER,
  payload,
});
