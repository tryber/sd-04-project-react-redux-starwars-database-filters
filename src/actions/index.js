import { getPlanetsData } from '../service/SWAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_SWAPI_PLANETS_SUCCESS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanetsData()
      .then(
        (planets) => dispatch(requestPlanetsSuccess(planets))
      );
  };
}
