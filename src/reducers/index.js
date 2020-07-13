import {
  REQUEST_API,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  SEARCH_PLANET,
} from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data.results,
        loading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SEARCH_PLANET:
      console.log('Search_planet: ', action.planetName);
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { name: action.planetName },
        },
      };
    default:
      return state;
  }
}

export default reducer;
