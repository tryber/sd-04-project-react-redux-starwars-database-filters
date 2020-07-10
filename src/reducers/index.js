import { REQUEST_API, REQUEST_SUCCESS, REQUEST_ERROR } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data.results,
        loading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
