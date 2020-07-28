export const ADDON_STORE_FILTERS = 'ADDON_STORE_FILTERS';
export const RADION_ASC = 'RADION_ASC';

export const actionAddFilter = (column, comparison, value) => ({
  type: ADDON_STORE_FILTERS,
  column,
  comparison,
  value,
});

export const actionRadio = (radio, column) => ({
  type: RADION_ASC,
  radio,
  column,
});
