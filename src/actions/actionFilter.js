export const SEARCH_PLANET_NAME = 'SEARCH_PLANET_NAME';
export const FILTER_BY = 'FILTER_BY';

export const CHANGE_DATA_FILTERED = 'CHANGE_DATA_FILTERED';

export const searchName = (data, name) => ({
  type: SEARCH_PLANET_NAME,
  data,
  name,
});

export const filterBy = (column, comparison, value) => ({
  type: FILTER_BY,
  column,
  comparison,
  value,
});

export const changeDataButton = (data) => ({
  type: CHANGE_DATA_FILTERED,
  data,
});
