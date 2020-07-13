import { REQUEST_API, GET_API } from '../actions';

const INITIAL_STATE = {
  data: {},
  isLoading: true,
};

const reducer = (state = INITIAL_STATE, action) => {
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

export default reducer;
