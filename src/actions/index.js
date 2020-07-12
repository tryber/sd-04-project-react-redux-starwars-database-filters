import requestFromApi from '../service/starWarsApi';

export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCESS = 'REQUEST_DATA_SUCESS';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_NUMERIC_FILTER = 'UPDATE_NUMERIC_FILTER';

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

export const updateFilterByName = (name) => ({
  type: UPDATE_FILTER,
  filters: {
    filterByName: {
      name,
    },
  },
});

export const updateNumericFilter = (filter) => ({
  type: UPDATE_NUMERIC_FILTER,
  numericFilter: filter,
});
