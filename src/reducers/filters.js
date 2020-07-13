import * as searchFilter from '../actions/filters';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case searchFilter.SEARCH:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: action.payload },
      };
    case searchFilter.NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.payload],
      };
    default:
      return state;
  }
}

export default filters;
