export const SEARCH_PLANET_NAME = 'SEARCH_PLANET_NAME';
export const FILTERS_BY = 'FILTERS_BY';

export const CHANGE_DATA_FILTERED = 'CHANGE_DATA_FILTERED';

export const searchName = (data, name) => ({
  type: SEARCH_PLANET_NAME,
  data,
  name,
});

export const filterBy = (values) => ({
  type: FILTERS_BY,
  values,
});

export const changeDataButton = (data) => ({
  type: CHANGE_DATA_FILTERED,
  data,
});
