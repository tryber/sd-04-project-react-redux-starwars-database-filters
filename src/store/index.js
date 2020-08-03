// vai importar o arquivo que vai ter os reducers
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
