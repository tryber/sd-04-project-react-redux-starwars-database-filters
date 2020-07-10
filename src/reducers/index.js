import { API_REQUISITION, API_REQUISITION_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isFetching: true,
  dados: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log('received action:', action);
  switch (action.type) {
    case API_REQUISITION:
      return {
        ...state,
        isFetching: true,
      };
    case API_REQUISITION_SUCCESS:
      return {
        ...state,
        dados: action.dados,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
