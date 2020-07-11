import * as searchFilter from '../actions/searchFilter';

const initialState = { filterByName: { name: '' } };

function filters(state = initialState, action) {
  switch (action.type) {
    case searchFilter.SEARCH:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: action.payload },
      };
    default:
      return state;
  }
}

export default filters;
