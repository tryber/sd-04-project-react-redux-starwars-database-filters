import apiCall from '../services/apiCall';
import { REQUEST_PLANETS, SUCCESS_PLANETS, FAILURE_PLANETS } from './types';

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

export default function requestFetch() {
  return (dispatch) => {
    dispatch(resquestPlanets());
    return apiCall().then(
      (data) => dispatch(successPlanets(data.results)),
      (error) => dispatch(failurePlanets(error.message)),
    );
  };
}
