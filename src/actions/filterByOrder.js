export function sortedFilter() {
  const sortFilter = (sort, column) => ({
    type: SORT_FILTER,
    sort,
    column,
  }
);

export const sortFilter = () => ({ type: SORT_FILTER })};
