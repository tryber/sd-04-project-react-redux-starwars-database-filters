import {
  FILTER_BY_NAME,
} from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
};

function filters(state = initialState, { type, name }) {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name },
      };
    default:
      return state;
  }
}

export default filters;
