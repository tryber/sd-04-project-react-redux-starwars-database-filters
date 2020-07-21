import planetsData from '../services/API';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';

const requestApi = () => ({
  type: REQUEST_API,
  isLoaded: false,
});

const receiveApi = ({ items }) => ({
  type: RECEIVE_API,
  isLoaded: true,
  items,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(requestApi());
  return planetsData()
    .then((items) => dispatch(receiveApi({ items: items.results })));
};
