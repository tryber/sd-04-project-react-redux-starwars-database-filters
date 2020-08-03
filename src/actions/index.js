import getPlanetsAPI from '../services/getPlanetsAPI';

const requestingPlanets = () => ({
  type: REUESTING_PLANETS
});

const sucessPlanets = (data) => ({
  type: REQUEST_PLANETS_SUCSSES,
  data
});

const failuePlanets = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());
    return getPlanetsAPI().then(
      (data) => dispatch(sucessPlanets(data.results)),
      (error) => dispatch(failurePlanets(error))
    )
  }
}