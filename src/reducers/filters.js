import {
  SEARCH_TEXT } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.searchText,
        },
      };
    default:
      return state;
  }
};

export default filters;
