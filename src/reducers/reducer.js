import { REQUEST_API, GET_API, INPUT_NAME } from '../actions';

const INITIAL_STATE = {
  data: {},
  isLoading: true,
  filterByName: { name: '' },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_API:
      return {
        ...state,
        data: action.data.results,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_NAME:
      return {
        ...state,
        filterByName: { name: action.event.target.value },
      };
    default:
      return state;
  }
};
