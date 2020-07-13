import bzunBzun from '../../service/api';
import * as actionTypes from './actionTypes';

export const requestData = () => ({
  type: actionTypes.REQUEST_DATA,
});

export const receivedData = (data) => ({
  type: actionTypes.RECEIVED_DATA,
  data,
});

export const handleNameFilter = (input) => ({
  type: actionTypes.HANDLE_NAME_FILTER,
  input,
});

export const handleNumericFilter = (event, field) => ({
  type: actionTypes.HANDLE_CHANGE_NUMERIC,
  value: event.target.value,
  field,
});

export const submitFilter = (event, filters) => ({
  type: actionTypes.SUBMIT_FILTER,
  event,
  column: filters.column,
  comparison: filters.comparison,
  value: filters.value,
});

export const removeFilter = (column) => ({
  type: actionTypes.REMOVE_FILTER,
  column,
});

export const submitOrder = (event, localState) => ({
  type: actionTypes.SUBMIT_ORDER,
  event,
  sort: localState.sort,
  column: localState.column,
});

const filterData = (data) => ({
  ...data,
  results: data.results.map((element) => {
    const filteredElement = element;
    delete filteredElement.residents;
    return filteredElement;
  }),
});

export const getData = (endpoint) => (dispatch) => {
  dispatch(requestData());
  return bzunBzun(endpoint).then((data) =>
    dispatch(receivedData(filterData(data))),
  );
};
