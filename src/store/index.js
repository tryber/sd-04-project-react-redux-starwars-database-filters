import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerRequestApi from '../reducers/index';

const rootReducer = combineReducers({ reducerRequestApi });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
