import requestFromApi from '../service/starWarsApi';

export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCESS = 'REQUEST_DATA_SUCESS';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_NUMERIC_FILTER = 'UPDATE_NUMERIC_FILTER';
export const REMOVE_NUMERIC_FILTER = 'REMOVE_NUMERIC_FILTER';
export const UPDATE_ORDER = 'UPDATE_ORDER';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: REQUEST_DATA_SUCESS,
  data,
});

export function fetchData(url) {
  return (dispatch) => {
    dispatch(requestData());

    return requestFromApi(url)
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

export const removeNumericFilter = (filterColumn) => ({
  type: REMOVE_NUMERIC_FILTER,
  filterColumn,
});

export const updateOrder = (order) => ({
  type: UPDATE_ORDER,
  order,
});
