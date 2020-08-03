import getPlanetsAPI from '../services/getPlanetsAPI';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const REQUEST_PLANETS_SUCSSES = 'REQUEST_PLANETS_SUCSSES';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';

const requestingPlanets = () => ({
  type: REQUESTING_PLANETS
});

const sucessPlanets = (data) => {
  console.log('aqui2' + JSON.stringify(data));
  return({
  
  type: REQUEST_PLANETS_SUCSSES,
  data
});}

const failurePlanets = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error
});

export function fetchPlanets() {
  return (dispatch) => {
    console.log("aqui");
    dispatch(requestingPlanets());
    return getPlanetsAPI().then(
      (data) => {console.log('aqui' + data); return dispatch(sucessPlanets(data.results))},
      (error) => dispatch(failurePlanets(error))
    )
  }
}