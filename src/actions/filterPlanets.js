export const INPUT_FILTER = 'INPUT_FILTER';
export const DATA_FILTER = 'DATA_FILTER';

export const setInputFilter = (name) => ({ type: INPUT_FILTER, name });
export const setDataFilter = (data) => ({ type: DATA_FILTER, data });
