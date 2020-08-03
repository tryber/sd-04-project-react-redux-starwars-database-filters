import { PEDIR_PLANETS, PEDIR_PLANETS_CONCLUIDO } from '../actions';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
};

const planets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIR_PLANETS:
      return {
        ...state,
        isLoading: true,
      };
    case PEDIR_PLANETS_CONCLUIDO:
      return {
        ...state,
        data: action.results,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default planets;
