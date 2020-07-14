// actions para tratamento de requisições de API

export const DATA_REQUEST = 'API_REQUEST';
export const DATA_RECEIVED = 'API_RECEIVED';
export const DATA_RECEIVED_ERROR = 'API_RECEIVING_ERROR';

const actionDataRequest = () => ({
  type: DATA_REQUEST,
});

const actionDataReceived = (data) => ({
  type: DATA_RECEIVED,
  data,
});

const actionDataReceivedError = (error) => ({
  type: DATA_RECEIVED_ERROR,
  error,
});

export const asyncActionDataFetch = (url) =>
  (dispatch) => {
    dispatch(actionDataRequest());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(actionDataReceived(data.results)))
      .catch((error) => dispatch(actionDataReceivedError(error)));
  };

// actions para filtragem de planetas por nome

export const NAME_FILTER = 'NAME_FILTER';

export const actionNameFilter = (text) => ({
  type: NAME_FILTER,
  text,
});
