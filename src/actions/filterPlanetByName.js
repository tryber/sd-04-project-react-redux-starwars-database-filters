export const FILTER_PLANET_BY_NAME = 'FILTER_NAME';

export const filterPlanetByName = (name) => ({
  type: FILTER_PLANET_BY_NAME,
  name,
});
