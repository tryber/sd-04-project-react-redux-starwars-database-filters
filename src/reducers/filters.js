import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUE, REMOVE_FILTERS, SORT_ITEMS } from '../actions/dataAction';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BY_NUMERIC_VALUE:
      return {
        ...state, 
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
      };
    case REMOVE_FILTERS:
      return {
        ...state, 
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (key) => key !== action.filteredKeys,
          ),
        ],
      };
    case SORT_ITEMS:
      return {
        ...state, 
        order: { column: action.column, sort: action.sort, },
      };
    default:
      return state;
  }
}

export default filters;
