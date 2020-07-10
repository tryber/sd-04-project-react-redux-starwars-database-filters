import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import swPlanetsReducer from '../reducers';

const store = createStore(swPlanetsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
