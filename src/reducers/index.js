import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { REQUEST_API, REQUISITION_SUCCESS } from '../Actions';

// import getSwapi from '../services/swApi';

const initialState = {
  data: [],
  isFetching: true,
};

const reducers = (state = initialState, action) => {
  console.log('received action: ', action);
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case REQUISITION_SUCCESS:
      console.log('entrou no REQUISITION');
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    default:
      return state;
  }
};

function storeConfig() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default storeConfig;
