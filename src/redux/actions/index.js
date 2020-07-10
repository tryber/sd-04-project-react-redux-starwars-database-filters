import bzunBzun from '../../service/api';
import * as actionTypes from './actionTypes';

export const requestData = () => ({
  type: actionTypes.REQUEST_DATA,
});

export const receivedData = (data) => ({
  type: actionTypes.RECEIVED_DATA,
  data,
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
