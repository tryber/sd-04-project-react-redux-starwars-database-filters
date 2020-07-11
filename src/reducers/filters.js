import { FILTER_BY_NAME } from '../actions/filterByName';

const initialState = {
  filterByName: {
    name: '',
  },
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
    default:
      return state;
  }
}

export default filters;
