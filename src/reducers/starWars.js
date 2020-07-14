import {
  REQUEST_PLANETS,
  REQUEST_PLANETS_SUCCESS,
  FILTER_BY_NAME,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          filterByName: {
            name: action.filters.filterByName.name,
          },
        },
      };
    default:
      return state;
  }
};

export default starWarsReducer;
