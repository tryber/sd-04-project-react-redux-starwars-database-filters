export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_NUMBER = 'FILTER_NUMBER';

export const filterPlanetByName = (name) => ({
  type: FILTER_NAME,
  name,
});

export const filterPlanetByNumber = (filterData) => ({
  type: FILTER_NUMBER,
  filterData,
});
