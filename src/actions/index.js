import swApi from '../services/api';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_FAILURE = 'SW_FAILURE';
export const SW_SEARCH = 'SW_SEARCH';
export const SW_SEARCH_NUM = 'SW_SEARCH_NUM';

export const swRequest = () => ({ type: SW_REQUEST, loading: true });

export const swSuccess = (data) => ({
  type: SW_SUCCESS,
  loading: false,
  data,
});

export const swFailure = (error) => ({
  type: SW_FAILURE,
  loading: false,
  error,
});

export function swFetch() {
  return (dispatch) => {
    dispatch(swRequest());
    return swApi().then(
      (data) => dispatch(swSuccess(data.results)),
      (error) => dispatch(swFailure(error.message))
    );
  };
}

export const swSearch = (value) => ({
  type: SW_SEARCH,
  value,
});

export const swSearchNum = (value) => ({
  type: SW_SEARCH_NUM,
  value,
});
