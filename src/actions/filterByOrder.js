export const SEARCH_TEXT = 'SEARCH_TEXT';
export const SORT_FILTER = 'SORT_FILTER';

const changeHandler = (searchText) => ({
  type: SEARCH_TEXT,
  searchText,
});


const sortFilter = (sort, column) => ({
  type: SORT_FILTER,
  sort,
  column,
});

export { changeHandler, sortFilter };
