import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
