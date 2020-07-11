import * as searchFilter from '../actions/searchFilter';

const initialState = { filters: { filterByName: { name: '' } } };

function filters(state = initialState, action) {
  switch (action.type) {
    case searchFilter.SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { ...state.filters.filterByName, name: action.payload },
        },
      };
    default:
      return state;
  }
}

export default filters;
