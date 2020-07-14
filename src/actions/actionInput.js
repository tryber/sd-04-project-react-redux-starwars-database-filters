export const INPUT_TEXT = 'INPUT_TEXT';
export const INPUT_VALUE = 'INPUT_NUMBER';
export const INPUT_COMPARISON = 'INPUT_COMPARISON';
export const INPUT_COLUMN = 'INPUT_COLUMN';

export const actionInput = (text) => ({
  type: INPUT_TEXT,
  text,
});

export const actionValue = (value) => ({
  type: INPUT_VALUE,
  value,
});

export const actionComparison = (comparison) => ({
  type: INPUT_COMPARISON,
  comparison,
});

export const actionColumn = (column) => ({
  type: INPUT_COLUMN,
  column,
});
