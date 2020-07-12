import { UPDATE_FILTER } from '../actions';

const initialState = {
  filterByName: {
    name: null,
  },
};

export default (state = initialState, { type, filters }) => {
  switch (type) {
    case UPDATE_FILTER:
      return { ...state, ...filters };

    default:
      return state;
  }
};
