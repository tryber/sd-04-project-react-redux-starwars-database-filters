import { FILTER_PLANET } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  // console.log('received action on filter: ', action);
  switch (action.type) {
    case FILTER_PLANET:
      return {
        ...state, filterByName: { name: action.name },
      };
    default:
      return state;
  }
};

export default filters;
