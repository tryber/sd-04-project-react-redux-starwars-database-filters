export const DATA_REQUEST = 'API_REQUEST';
export const DATA_RECEIVED = 'API_RECEIVED';
export const DATA_RECEIVED_ERROR = 'API_RECEIVING_ERROR';

const actionDataRequest = () => ({
  type: DATA_REQUEST,
});

const actionDataReceived = (value) => ({
  type: DATA_RECEIVED,
  value,
});

const actionDataReceivedError = (value) => ({
  type: DATA_RECEIVED_ERROR,
  value,
});


export const asyncActionDataFetch = (url) => {
  return (dispatch) => {
    dispatch(actionDataRequest());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(actionDataReceived(data.results)))
      .catch((error) => dispatch(actionDataReceivedError(error)));
  };
}
