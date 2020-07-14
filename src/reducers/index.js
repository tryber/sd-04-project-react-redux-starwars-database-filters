import { REQUEST_API, REQUISITION_SUCCESS } from '../Actions';

// import getSwapi from '../services/swApi';

const initialState = {
  data: [],
  isFetching: true,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case REQUISITION_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducers;
