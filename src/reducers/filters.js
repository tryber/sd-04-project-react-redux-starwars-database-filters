import { INPUT_TEXT } from '../actions/actionInput';

export const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

export const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.text,
        },
      };
    default:
      return state;
  }
};
