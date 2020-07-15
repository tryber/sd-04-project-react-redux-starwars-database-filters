import swApi from '../services/api';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_SEARCH = 'SW_SEARCH';
export const SW_SEARCH_NUM = 'SW_SEARCH_NUM';

export const swRequest = () => ({ type: SW_REQUEST, loading: true });

export const swSuccess = (data) => ({
  type: SW_SUCCESS,
  loading: false,
  data,
});

export function swFetch() {
  return (dispatch) => {
    dispatch(swRequest());
    return swApi()
      .then((data) => dispatch(swSuccess(data.results)))
      .catch((error) => {
        console.error(error);
      });
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
