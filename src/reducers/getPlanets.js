import { REQUEST_API, REQUISITION_SUCCESS } from '../actions';

// import getSwapi from '../services/swApi';

const INITIAL_STATE = {
  data: [],
  // filterByName: { name: '' },
  isFetching: true,
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case REQUISITION_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
