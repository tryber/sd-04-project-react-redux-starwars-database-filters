import * as apiActions from '../actions/apiRequests';

const initialState = { loading: true, data: [], error: '' };

function apiRequest(state = initialState, action) {
  switch (action.type) {
    case apiActions.FETCH_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case apiActions.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case apiActions.FETCH_PLANETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default apiRequest;
