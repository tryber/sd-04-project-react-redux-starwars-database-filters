import { BUSCAR_NOME } from '../actions/filtersActions';

const INITIAL_STATE = {
  filterByName: { name: '' },
};

const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSCAR_NOME:
      return {
        ...state,
        filterByName: { name: action.digitado },
      };
    default:
      return state;
  }
};

export default filter;
