import { SEARCH_TEXT, NUMERIC_FILTER } from '../actions';

const INITIAL_FILTER_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const reducerFilter = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          {
            column: action.event[0].value,
            comparison: action.event[1].value,
            value: action.event[2].value,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducerFilter;
