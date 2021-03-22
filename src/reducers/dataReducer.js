import { REQUEST_DATA_SUCESS } from '../actions';

const initialState = [];

export default (state = initialState, { type, data }) => {
  switch (type) {
    case REQUEST_DATA_SUCESS:
      return data;

    default:
      return state;
  }
};
