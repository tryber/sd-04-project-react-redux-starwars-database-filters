import { createStore, applyMiddleware } from 'redux';
import rootCombiner from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rootCombiner, applyMiddleware(thunk));

export default store;
