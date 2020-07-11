export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterByName = (text) => ({
  type: FILTER_BY_NAME,
  text,
});
