import { combineReducers } from 'redux';
import fetchPlanets from '../services/getPlanetsAPI'

const rootReducer = combineReducers({fetchPlanets});

export default rootReducer;
