import getData from '../services/api';

const REQUEST = 'REQUEST_PLANETS';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';

const request = () => ({ type: REQUEST });

const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  data,
});

const requestFailure = () => ({ type: REQUEST_FAILURE });

const fetch = () => async (dispatch) => {
  dispatch(request());
  try {
    const response = await getData();
    return dispatch(requestSuccess(response.results));
  } catch (err) {
    return dispatch(requestFailure());
  }
};

export default fetch;
