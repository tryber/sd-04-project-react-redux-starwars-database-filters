export const SELECT_FILTER = 'SELECT_FILTER';

export default function filterSelectOption(column, comparison, value) {
  return {
    type: SELECT_FILTER,
    column,
    comparison,
    value,
  };
}
