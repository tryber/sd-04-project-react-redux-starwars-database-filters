import swApi from '../services/api';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_FAILURE = 'SW_FAILURE';
// export const SW_FILTER_NAME = 'SW_FILTER_NAME';

const swRequest = () => ({
  type: SW_REQUEST,
});

const swSuccess = (data) => ({
  type: SW_SUCCESS,
  data,
});

const swFailure = (error) => ({
  type: SW_FAILURE,
  error,
});

export function swFetch() {
  return (dispatch) => {
    dispatch(swRequest());

    return swApi().then(
      (json) => dispatch(swSuccess(json.results)),
      (error) => dispatch(swFailure(error)),
    );
  };
}

// export const swFilterName = (name) => ({
//   type: SW_FILTER_NAME,
//   name,
// });
