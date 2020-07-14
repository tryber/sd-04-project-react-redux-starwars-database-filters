import { REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_ERROR } from '../actions';

const INICIAL_STATE = {
  isLoading: false,
  data: [],
  error: {},
};

const apiReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case REQUEST_API_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default apiReducer;
