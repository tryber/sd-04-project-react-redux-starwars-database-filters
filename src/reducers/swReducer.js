import { SW_REQUEST, SW_SUCCESS, SW_FAILURE } from "../action";

const INITIAL_STATE = {
  fetching: false,
  data: [],
  error: "",
};

const swReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case SW_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: [...action.data],
      };
    case SW_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default swReducer;
