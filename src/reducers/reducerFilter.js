import { FILTER_TABLE } from '../action/actionFilter';

// const INITIAL_STATE = {
//   text: '',
// };

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_TABLE:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
        //text: action.text,
      };
    default:
      return state;
  }
};

export default filters;
