import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getSwapi from '../services/swApi';

const planetsApi = getSwapi();

const reducers = combineReducers({
  search: function (state, action) {
    return {
      type: 'REQUISITION_SUCCESS',
      data: planetsApi,
    };
  },
});

function storeConfig() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default storeConfig;
