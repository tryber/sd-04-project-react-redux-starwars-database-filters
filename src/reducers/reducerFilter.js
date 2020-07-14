import { FILTER_NAME } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    default:
      return state;
  }
};

export default filters;
