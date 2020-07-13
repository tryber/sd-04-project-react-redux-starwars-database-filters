import { combineReducers } from 'redux';
import planets from './planets';

const rootReducer = combineReducers({
  planets,
});

export default rootReducer;

/* function emptyReducer() {
  return {};
}

export default emptyReducer; */
