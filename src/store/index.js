import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import swPlanets from '../reducers';

const store = createStore(swPlanets, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(swPlanets, applyMiddleware(thunk));

export default store;
