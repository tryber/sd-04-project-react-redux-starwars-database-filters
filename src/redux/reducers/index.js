import * as actionTypes from '../actions/actionTypes';
const initialState = { data: {} };

const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_DATA:
      return { ...state };
    case actionTypes.RECEIVED_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default starReducer;
