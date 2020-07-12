// 4) Criaçao dos reducers com as actions criadas posteriormente.

import { SW_REQUEST, SW_SUCCESS, SW_FAILURE, SW_FILTER } from "../action";

const INITIAL_STATE = {
  fetching: false,
  data: [],
  error: "",
  dataFiltered: [],
  filters: { filterByName: { name: "" }, filterByNumericValues: [] },
};

const swReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // durante o request, altere o estado de fetching para true
    case SW_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    // caso o request tenha sucesso, fetching se torna falso
    // e o data é o valor recebido na action
    case SW_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: [...action.data],
        dataFiltered: [...action.data],
      };
    // caso o request falhe, fetching se torna falso
    // e lança um novo erro.
    case SW_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
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
