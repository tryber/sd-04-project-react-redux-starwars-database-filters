export const ORDER = 'ORDER';
export const orderColumn = (column, sort) => ({
  type: ORDER,
  column,
  sort,
});
