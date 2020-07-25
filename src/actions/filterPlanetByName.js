export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filterPlanetByName = (name) => ({
  type: FILTER_NAME,
  name,
});

export const filterPlanetByNumber = (filterData) => ({
  type: FILTER_NUMBER,
  filterData,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});
