import { FILTER_BY_NAME } from '../actions/FiltersActions';

const initialState = {};

export const filters = (state = initialState, { type, filter }) => {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: filter },
      };

    default:
      return state;
  }
};
