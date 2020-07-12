export const DATA_REQUEST = 'API_REQUEST';
export const DATA_RECEIVED = 'API_RECEIVED';
export const DATA_RECEIVED_ERROR = 'API_RECEIVING_ERROR';

const data_request = () => ({
  type: DATA_REQUEST,
});

const data_received = (value) => ({
  type: DATA_RECEIVED,
  value,
});

const data_receivedError = (value) => ({
  type: DATA_RECEIVED_ERROR,
  value,
});

export const data_fetch = (url) =>
  (dispatch) => {
    dispatch(data_request);
    return fetch(url)
      .then((data) => data.json()
        .then(
          (json) => dispatch(data_received(json)),
          (error) => dispatch(data_receivedError(error))
        )
      );
  }
