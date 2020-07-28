export const INPUT_TEXT = 'INPUT_TEXT';
export const ACTION_VALUE = 'ACTION_VALUE';
export const ACTION_COMPARISON = 'ACTION_COMPARISON';
export const ACTION_COLUMN = 'ACTION_COLUMN';

export const actionInput = (text) => ({
  type: INPUT_TEXT,
  text,
});

export const actionValue = (value) => ({
  type: ACTION_VALUE,
  value,
});

export const actionComparison = (comparison) => ({
  type: ACTION_COMPARISON,
  comparison,
});

export const actionColumn = (column) => ({
  type: ACTION_COLUMN,
  column,
});
