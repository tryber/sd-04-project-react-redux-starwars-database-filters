import requestFromApi from '../service/starWarsApi';

export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCESS = 'REQUEST_DATA_SUCESS';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: REQUEST_DATA_SUCESS,
  data,
});

export function fetchData(request) {
  return (dispatch) => {
    dispatch(requestData());

    return requestFromApi(request)
      .then(
        (data) => dispatch(receiveData(data.results)),
      );
  };
}
