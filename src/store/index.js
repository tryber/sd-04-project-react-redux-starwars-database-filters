import reducerRequestApi from '../reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ reducerRequestApi });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
