import { SEARCH_TEXT, NUMERIC_FILTER } from '../actions';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
const filters = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: { name: action.searchText },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          {
            column: action.data.column.value,
            comparison: action.data.comparison.value,
            value: action.data.inputNumber.value,
          },
        ],
      };
    default:
      return state;
  }
};

export default filters;
