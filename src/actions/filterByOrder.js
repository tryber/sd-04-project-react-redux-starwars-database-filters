export default { sortFilter };

  const sortFilter = (sort, column) => ({
    type: SORT_FILTER,
    sort,
    column,
  }
);
