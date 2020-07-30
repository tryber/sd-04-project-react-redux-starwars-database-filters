import getPlanetsAPI from '../services/getPlanetsAPI';

const REQUEST = 'REQUEST_PLANETS';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';

const request = () => ({ type: REQUEST });

const requestSuccess = (data) => ({type: REQUEST_SUCCESS, data,});

const requestFailure = () => ({ type: REQUEST_FAILURE });

export const fetchPlanets = () => {
  return (dispatch) => {
    dispatch(request());
  
    return getPlanetsAPI().then(
      (data) => dispatch(requestSuccess(data.results)),
      (error) => dispatch(requestFailure(error)),
    )
  }
}

export fetchPlanets;
