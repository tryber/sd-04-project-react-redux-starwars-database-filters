import { combineReducers } from 'redux';
import getPlanets from '../services/getPlanetsAPI'

const rootReducer = combineReducers({getPlanets});

export default rootReducer;
