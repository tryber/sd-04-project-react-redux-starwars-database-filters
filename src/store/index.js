import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducerData from '../reducers';

const rootReducer = combineReducers({ reducerData });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
