import { FILTER_BY_NAME } from '../actions/filterByName';
import { FILTER_BY_NUMERIC_VALUES } from '../actions/filterByNumericValues';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.text,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    default:
      return state;
  }
}

export default filters;
