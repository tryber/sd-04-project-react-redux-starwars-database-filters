export const SORT_FILTER = 'SORT_FILTER';
export { sortFilter };

const sortFilter = (sort, column) => ({
  type: SORT_FILTER,
  sort,
  column,
});
