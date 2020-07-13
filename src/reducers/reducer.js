import { API_REQUISITION, API_REQUISITION_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUISITION:
      return {
        ...state,
        isFetching: true,
      };
    case API_REQUISITION_SUCCESS:
      return {
        ...state,
        data: action.dados,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
