export const SORT_FILTER = 'SORT_FILTER';

const sortFilter = (sort, column) => ({
  type: SORT_FILTER,
  sort,
  column,
});
