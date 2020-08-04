export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SORT_FILTERS = 'SORT_FILTERS';

export const filterPlanetByName = (name) => ({
  type: FILTER_NAME,
  name,
});

export const filterPlanetByNumber = ({ column, comparison, value }) => ({
  type: FILTER_NUMBER,
  column,
  comparison,
  value,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const sortFilters = (column, sort) => ({
  type: SORT_FILTERS,
  column,
  sort,
});
