export const DATA_REQUEST = 'API_REQUEST';
export const DATA_RECEIVED = 'API_RECEIVED';
export const DATA_RECEIVED_ERROR = 'API_RECEIVING_ERROR';

const dataRequest = () => ({
  type: DATA_REQUEST,
});

const dataReceived = (value) => ({
  type: DATA_RECEIVED,
  value,
});

const dataReceivedError = (value) => ({
  type: DATA_RECEIVED_ERROR,
  value,
});

export const dataFetch = (url) =>
  (dispatch) => {
    dispatch(dataRequest);
    return fetch(url)
      .then((data) => data.json()
        .then(
          (json) => dispatch(dataReceived(json)),
          (error) => dispatch(dataReceivedError(error)),
        ),
      );
  };
