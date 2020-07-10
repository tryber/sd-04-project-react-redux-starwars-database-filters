import {
  REQUEST_ISS_PLANET,
  RESEVED_PLANETS,
} from '../action/index';

const INITIAL_STATE = {
  carregando: null,
  payload: '',
};

const StarsPlanetReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ISS_PLANET:
      return { ...state, carregando: true };
    case RESEVED_PLANETS:
      return { ...state, carregando: false, payload: action.planets };
    default:
      return state;
  }
};

export default StarsPlanetReduce;
