import {
  PLANETS_IS_LOADING,
  PLANETS_FETCH_SUCCESS,
  PLANETS_HAS_ERRORED,
} from '../actions/PlanetsActions';

const initialState = {
  isLoading: true,
  data: [],
  hasErrored: false,
};

export const planetsLoading = (state = initialState, { type, isLoading }) => {
  switch (type) {
    case PLANETS_IS_LOADING:
      return { ...state, isLoading };

    default:
      return state;
  }
};

export const planets = (state = initialState, { type, data }) => {
  switch (type) {
    case PLANETS_FETCH_SUCCESS:
      return { ...state, data: [...state.data, ...data] };

    default:
      return state;
  }
};

export const planetsErrored = (state = initialState, { type, hasErrored }) => {
  switch (type) {
    case PLANETS_HAS_ERRORED:
      return { ...state, hasErrored: { ...state.hasErrored, ...hasErrored } };

    default:
      return state;
  }
};
