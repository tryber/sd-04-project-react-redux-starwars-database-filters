import { FILTER_PLANET_BY_NAME } from '../actions/filterPlanetByName';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filterPlanetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_PLANET_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    default:
      return state;
  }
};

export default filterPlanetReducer;
