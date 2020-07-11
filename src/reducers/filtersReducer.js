import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

function filtersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.event,
        },
      };
    default:
      return state;
  }
}

export default filtersReducer;
