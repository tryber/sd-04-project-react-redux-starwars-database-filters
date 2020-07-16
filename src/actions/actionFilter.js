export const ADDON_STORE_FILTERS = 'ADDON_STORE_FILTERS';

export const actionAddFilter = (column, comparison, value) => ({
  type: ADDON_STORE_FILTERS,
  column,
  comparison,
  value,
});
