import { NAME_FILTER } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
};

const reducerFilters = (state = initialState, action) => {
  switch (action.type) {
    case NAME_FILTER:
      return { ...state, filterByName: { name: action.text } };
    default:
      return state;
  }
};

export default reducerFilters;
