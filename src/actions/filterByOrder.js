export default { sortFilter };

export const sortFilter = (sort, column) => ({
    type: SORT_FILTER,
    sort,
    column,
  }
);
