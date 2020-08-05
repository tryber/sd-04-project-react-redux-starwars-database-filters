import { PEDIR_PLANETS, PEDIR_PLANETS_CONCLUIDO } from '../actions';
import { APLICA_FILTRO, TROCA_DATA } from '../actions/filtersActions';

const INITIAL_STATE = {
  data: [],
  backData: [],
  isLoading: true,
  changeData: false,
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
        backData: action.results,
        isLoading: false,
      };
    case TROCA_DATA:
      return {
        ...state,
        changeData: true,
      };
    case APLICA_FILTRO:
      return {
        ...state,
        data: action.newData,
        changeData: false,
      };
    default:
      return state;
  }
};

export default planets;
