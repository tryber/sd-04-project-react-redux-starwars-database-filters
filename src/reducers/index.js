import { combineReduers } from 'redux';
import getPlanets from './getPlanets';

const rootReducer = combineReduers({getPlanets});

export default rootReducer;