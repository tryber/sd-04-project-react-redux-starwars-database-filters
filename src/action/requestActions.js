import planetsAPI from '../services/planetsAPI';

const requestSuccess = (data) => ({ type: 'REQUEST_SUCCESS', data });

const requestFailure = () => ({ type: 'REQUEST_FAILURE' });

export default function fetchPlanets() {
  return (dispatch) => {
    return planetsAPI().then(
      (data) => dispatch(requestSuccess(data.results)),
      (error) => dispatch(requestFailure(error)),
    );
  };
}
