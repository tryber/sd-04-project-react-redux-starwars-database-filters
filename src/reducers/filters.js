import { FILTER_BY_TEXT } from '../actions/actions';

const initialState = {
  filterByName: { name: '' },
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    default:
      return state;
  }
};

export default filters;
