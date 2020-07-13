import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootCombiner from '../reducers';

const store = createStore(rootCombiner, applyMiddleware(thunk));

export default store;
