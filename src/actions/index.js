import getPlanetsData from '../services/StarWarsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (json) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data: json.results,
});

export const filterByName = (value) => ({
  type: FILTER_BY_NAME,
  filters: {
    filterByName: {
      name: value,
    },
  },
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanetsData().then((json) => dispatch(receivePlanets(json)));
  };
}
