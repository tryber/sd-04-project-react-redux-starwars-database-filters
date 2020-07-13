import { combineReducers } from 'redux';

import swReducer from './swReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  swReducer,
  filterReducer,
});

export default rootReducer;
