import { FILTER_BY_NAME } from '../actions/index';

const inicialState = {
  filterByName: {
    name: ''
  }
}

const filters = (state = inicialState, action) => {
  switch(action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };

      default:
        return state;
  }
};

export default filters;
