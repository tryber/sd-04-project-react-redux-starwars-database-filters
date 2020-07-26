export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const APPLY_FILTER_BY_NAME = 'APPLY_FILTER_BY_NAME';
export const FILTER_BY_NUMBER = 'FILTER_BY_NUMBER';
export const FILTER_COLUMN = 'FILTER_COLUMN';

export function filterByName(name) {
  return ({
    type: FILTER_BY_NAME,
    name,
  });
}

export function applyFilters(planets) {
  return ({
    type: APPLY_FILTER_BY_NAME,
    planets,
  });
}

export function filterByNumber(filter) {
  return ({
    type: FILTER_BY_NUMBER,
    filter,
  });
}
