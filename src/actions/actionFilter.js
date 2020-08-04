export const SEARCH_PLANET_NAME = 'SEARCH_PLANET_NAME';
export const FILTERS_BY = 'FILTERS_BY';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SORT_BY = 'SORT_BY';

export const searchName = (data, name) => ({
  type: SEARCH_PLANET_NAME,
  data,
  name,
});

export const filterBy = (values) => ({
  type: FILTERS_BY,
  values,
});

export const sortBy = (data, column, sort) => ({
  type: SORT_BY,
  data,
  column,
  sort,
});

export const removeFilterClear = (column) => ({
  type: REMOVE_FILTER,
  column,
});
