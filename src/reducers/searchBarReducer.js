import { SEARCH_BAR } from '../actions/searchBarActions';

const initialState = {
  filterByName: {
    name: '',
  },
};

function filters(state = initialState, action) {
  console.log('test searchbarReducer', action);
  switch (action.type) {
    case SEARCH_BAR:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    default:
      return state;
  }
}

export default filters;
