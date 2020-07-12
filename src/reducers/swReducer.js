// 4) Criaçao dos reducers com as actions criadas posteriormente.

import { SW_REQUEST, SW_SUCCESS, SW_FAILURE, SW_FILTER } from '../action';

const INITIAL_STATE = {
  fetching: false,
  data: [],
  error: '',
  dataFiltered: [],
  filters: { filterByName: { name: '' }, filterByNumericValues: [] },
};

const swReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_REQUEST: // durante o request, altere o estado de fetching
      return {
        ...state,
        fetching: true,
      };
    case SW_SUCCESS: // caso tenha sucesso, data é o valor recebido pela action
      return {
        ...state,
        fetching: false,
        data: [...action.data],
        dataFiltered: [...action.data],
      };
    case SW_FILTER:
      return {
        ...state,
        dataFiltered: state.data.filter(({ name }) =>
          name.includes(action.name)
        ),
        filters: {
          ...state.filters,
          filterByName: {
            name: action.name,
          },
        },
      };
    default:
      return state;
  }
};

export default swReducer;
