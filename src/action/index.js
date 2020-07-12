//  Criar as actions. Inicialmente 3:
//  Para a requisição. Caso a requisição retorne ou caso ela falhe.

import swApi from '../services/api';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_FAILURE = 'SW_FAILURE';

export const SW_FILTER = 'SW_FILTER';

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

// requisito 2.
export const swFilter = (name) => ({
  type: SW_FILTER,
  name,
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
