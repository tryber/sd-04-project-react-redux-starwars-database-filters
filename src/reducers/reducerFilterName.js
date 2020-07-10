import { FILTERED_NAME } from '../actions/types';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterNumericValues: [],
  filterOrder: {},
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERED_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    default:
      return state;
  }
};

export default filters;
