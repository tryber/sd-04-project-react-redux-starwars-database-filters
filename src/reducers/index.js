import { REQUEST_API, REQUEST_API_SUCESS } from '../actions';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

const reducerRequestApi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data.results,
      };
    default:
      return state;
  }
};

export default reducerRequestApi;
