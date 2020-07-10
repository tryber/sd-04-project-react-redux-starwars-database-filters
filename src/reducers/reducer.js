
import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
} from '../actions';

const INICIAL_STATE = {
  isLoading: false,
  data: [],
  error: '',
};

const reducer = (state = INICIAL_STATE, action) => {
  console.log(action);
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
      };
    case REQUEST_API_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
