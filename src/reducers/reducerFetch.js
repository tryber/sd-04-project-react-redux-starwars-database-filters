import { REQUEST_API, REQUEST_API_SUCESS } from '../actions/actionFetch';

export const INITIAL_STATE = {
  data: [],
  isLoading: true,
  filters: {
    filterByName: {
      name: '',
    },
  },
};

export const reducerFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        isLoading: true,
      };
    case REQUEST_API_SUCESS: {
      return {
        data: action.data,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
