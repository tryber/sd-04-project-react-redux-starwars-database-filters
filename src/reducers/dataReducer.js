import { REQUEST_SWAPI, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions';
import sortFunc from '../components/functions/sortFunc';

const INITIAL_STATE = {
  fetching: false,
  data: [],
  error: '',
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SWAPI:
      return {
        ...state,
        fetching: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        data: sortFunc(action.data, 'Name', 'ASC'),
        fetching: false,
      };

    case REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };

    default:
      return state;
  }
};

export default dataReducer;
