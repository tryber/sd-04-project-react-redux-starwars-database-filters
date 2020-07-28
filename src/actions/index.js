import getPlanetsAPI from '../services/getPlanetsAPI';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const SUCESS_PLANETS = 'SUCESS_PLANETS';
export const FAILURE_PLANETS = 'FAILURE_PLANETS';

const requestingPlanets = () => ({
  type: REQUESTING_PLANETS,
});

const sucessPlanets = (data) => ({
  type: SUCESS_PLANETS,
  data,
});

const failurePlanets = (error) => ({
  type: FAILURE_PLANETS,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());

    return getPlanetsAPI().then(
      (data) => dispatch(sucessPlanets(data.results)),
      (error) => dispatch(failurePlanets(error)),
    );
  };
}
