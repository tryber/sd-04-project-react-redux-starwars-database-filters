export const DELETE_FILTER = 'DELETE_FILTER';

export const deleteFilter = (deleted) => ({
  type: DELETE_FILTER,
  deleted,
});
