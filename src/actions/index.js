import getPlanets from '../service/planetsAPI';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const FILTER_PLANET = 'FILTER_PLANET';

export const requestPlanets = () => ({
  type: REQUEST_DATA,
});

export const receivePlanets = (data) => ({
  type: RECEIVE_DATA,
  data,
});

export const filterPlanet = (name) => ({
  type: FILTER_PLANET,
  name,
});

// export function fetchGetPlanet() {
//   return (dispatch) => {
//     dispatch(requestPlanets());

//     return getPlanets().then(
//       (data) => dispatch(receivePlanets(data.results))
//       // ,      (error) => dispatch(requestApiError(error))
//     );
//   };
// }

export function fetchGetPlanet() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets().then((planets) => dispatch(receivePlanets(planets.results)));
  };
}
