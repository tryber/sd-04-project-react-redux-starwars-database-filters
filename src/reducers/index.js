import { REQUEST_API, REQUISITION_SUCCESS, FILTER_BY_NAME } from '../Actions';

// import getSwapi from '../services/swApi';

const INITIAL_STATE = {
  data: [],
  filterByName: { name: '' },
  isFetching: true,
};

const reducers = (state = INITIAL_STATE, action) => {
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
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    default:
      return state;
  }
};

export default reducers;
