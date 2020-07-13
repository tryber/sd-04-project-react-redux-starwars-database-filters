import { INPUT_TEXT } from '../actions/actionInput';

export const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

export const reducerInput = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filters: {
          filterByName: {
            name: action.text,
          },
        },
      };
    default:
      return state;
  }
};
