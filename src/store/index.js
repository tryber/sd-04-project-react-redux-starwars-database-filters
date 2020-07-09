import { reducerRequestApi } from '../reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ reducerRequestApi });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
