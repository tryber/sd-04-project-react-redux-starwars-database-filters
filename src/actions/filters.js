export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const APPLY_FILTER_BY_NAME = 'APPLY_FILTER_BY_NAME';

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
