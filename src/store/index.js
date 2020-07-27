import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listaReducers from '../reducers';

export const rootReducer = combineReducers({ listaReducers });

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk)(createStore)(rootReducer, devTools);

export default store;
