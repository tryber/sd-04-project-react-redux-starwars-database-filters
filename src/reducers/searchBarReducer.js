import { SEARCH_BAR } from '../actions/searchBarActions';
import { NUMERICAL_FILTER } from '../actions/filterActions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BAR:
      console.log('test searchbarReducer', action);
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    case NUMERICAL_FILTER: {
      const filter = action.value;
      console.log('reducer Numerical Filter', action);
      console.log('Value ?', filter.value);
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: filter.column,
            comparison: filter.comparison,
            value: filter.value,
          },
        ],
      };
    }
    default:
      return state;
  }
}

export default filters;
