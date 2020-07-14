import { FILTER_BY_TEXT } from '../actions/actions';

const initialState = {
  filters: { filterByName: { name: '' } },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return {
        ...state,
        filters: { filterByName: { name: action.name } },
      };
    default:
      return state;
  }
};

export default filterReducer;
