import { SEARCH_TEXT, NUMERIC_FILTER, DELETE_FILTER, ORDER_FILTER } from '../actions';

const INITIAL_FILTER_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const numercFilter = (state, action) => ({
  ...state,
  filterByNumericValues: [
    ...state.filterByNumericValues,
    {
      column: action.state.column,
      comparison: action.state.comparison,
      value: action.state.value,
    },
  ],
});

const filters = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case NUMERIC_FILTER:
      return numercFilter(state, action);
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues
          .filter(({ column }) => column !== action.column),
      };
    case ORDER_FILTER:
      return {
        ...state,
        order: { column: action.state.column, sort: action.state.sort },
      };
    default:
      return state;
  }
};

export default filters;
