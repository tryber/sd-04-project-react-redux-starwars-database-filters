import { API_REQUISITION } from "../actions";

const INITIAL_STATE = {
  payload: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUISITION:
      return{
        ...state,
        action.payload,
      }
    default:
      return state
  }
}

export default emptyReducer;