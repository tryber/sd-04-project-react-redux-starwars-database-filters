import getPlanetsData from '../services/StarWarsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

// Actions síncronas

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (json) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data: json.results,
});

// Action assíncrona -> redux thunk

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanetsData().then((json) => dispatch(receivePlanets(json)));
  };
}
