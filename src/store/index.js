import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import reducerFilter from '../reducers/reducerFilter';

const rootReducer = combineReducers({ reducer, reducerFilter });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
