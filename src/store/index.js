import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
