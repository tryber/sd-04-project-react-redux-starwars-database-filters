export const SEARCH_TEXT = 'SEARCH_TEXT';
export const NUMERIC_FILTER = 'NUMERIC_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const changeHandler = (searchText) => ({
  type: SEARCH_TEXT,
  searchText,
});

const filterByNumber = (data) => ({
  type: NUMERIC_FILTER,
  data,
});

const removeFilter = (filterToRemove) => ({
  type: REMOVE_FILTER,
  filterToRemove,
});

export { filterByNumber, changeHandler, removeFilter };
