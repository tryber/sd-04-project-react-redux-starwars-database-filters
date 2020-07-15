import { NAME_FILTER } from '../actions';
import { NUMERIC_FILTER } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const reducerFilters = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case NAME_FILTER:
      return { ...state, filterByName: { name: action.text } };
    case NUMERIC_FILTER:
      return { ...state, filterByNumericValues: [ ...state.filterByNumericValues, action.numericFilter ] };
    default:
      return state;
  }
};

export default reducerFilters;
