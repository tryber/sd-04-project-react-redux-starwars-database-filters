import getPlanets from '../services/planetsApi';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetSuccess = ({ results }) => ({
  type: REQUEST_PLANETS_SUCCESS,
  results,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets().then((data) => dispatch(receivePlanetSuccess(data)));
  };
}
