import swApi from '../services/api';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_FAILURE = 'SW_FAILURE';
export const SW_FILTER_NAME = 'SW_FILTER_NAME';
export const SW_FILTER_NUM = 'SW_FILTER_NUM';
export const SW_FILTER_BTN = 'SW_FILTER_BTN';
export const SW_FILTER_SV = 'SW_FILTER_SV';
export const SW_CAT = 'CAT';

const swRequest = () => ({
  type: SW_REQUEST,
});

const swSuccess = (json) => ({
  type: SW_SUCCESS,
  data: json,
});

const swFailure = (error) => ({
  type: SW_FAILURE,
  error,
});

export const swFetch = () => (dispatch) => {
  dispatch(swRequest());
  return swApi().then(
    (planets) => dispatch(swSuccess(planets.results)),
    (error) => dispatch(swFailure(error))
  );
};

export const swFilterName = (name) => ({
  type: SW_FILTER_NAME,
  name: name,
});

export const swFilterBtn = (column, comparison, value) => ({
  type: SW_FILTER_BTN,
  column,
  comparison,
  value,
});

export const swFilterSv = (name, value) => ({
  type: SW_FILTER_SV,
  name,
  value,
});

export const swCat = () => ({
  type: SW_CAT,
});
