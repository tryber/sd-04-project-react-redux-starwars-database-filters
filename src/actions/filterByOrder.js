export const sortFilter = (sort, column) => ({
  type: SORT_FILTER,
  sort,
  column,
});

export const sortFilter = () => ({ type: SORT_FILTER });
export const SORT_FILTER = 'SORT_FILTER';