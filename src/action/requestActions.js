import getPlanetsAPI from '../services/getPlanetsAPI';

const requestSuccess = (data) => ({ type: 'REQUEST_SUCCESS', data });

const requestFailure = () => ({ type: 'REQUEST_FAILURE' });

export default function fetchPlanets() {
  return (dispatch) => {
    return getPlanetsAPI().then(
      (data) => dispatch(requestSuccess(data.results)),
      (error) => dispatch(requestFailure(error)),
    );
  };
}
