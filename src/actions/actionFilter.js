export const SEARCH_PLANET_NAME = 'SEARCH_PLANET_NAME';

export const searchName = (data, name) => ({
  type: SEARCH_PLANET_NAME,
  data,
  name,
});
