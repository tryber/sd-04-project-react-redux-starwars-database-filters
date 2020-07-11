import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerRequestApi from '../reducers/index';
import reducerOnChange from '../reducers/reducerOnChange';

const rootReducer = combineReducers({ reducerRequestApi, reducerOnChange });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
