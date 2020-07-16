import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import planetTableReducer from '../reducers';

const store = createStore(planetTableReducer, applyMiddleware(thunk));

export default store;
