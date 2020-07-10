import apiCall from '../services/apiCall';

const resquestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const successPlanets = (data) => ({
  type: SUCCESS_PLANETS,
  data,
});

const failurePlanets = (error) => ({
  type: FAILURE_PLANETS,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(resquestPlanets());

    return apiCall().then(
      (json) => dispatch(successPlanets(json.results)),
      (error) => dispatch(failurePlanets(error)),
    );
  };
}
