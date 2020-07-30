import { createStore } from 'redux';
import { Reducers } from '../reducers';
import getPlanets from '../services/getPlanetsAPI'

export const Store = createStore(Reducers);