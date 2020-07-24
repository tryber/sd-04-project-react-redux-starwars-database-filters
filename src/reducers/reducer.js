import {
  REQUEST_PLANETS,
  REQUEST_PLANETS_SUCCESS,
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUES,
  UPDATE_NUMERIC_FILTERS,
  SELECT_COLUMN,
  SELECT_COMPARISON,
  SELECT_NUMBER,
} from '../actions/index';

const INITIAL_STATE_API = {
  isFetching: false,
  data: [],
};

const INITIAL_STATE_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const INITIAL_STATE_SELECT = {
  column: '',
  comparison: '',
  value: '',
};

export const starWarsAPIReducer = (state = INITIAL_STATE_API, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const filters = (state = INITIAL_STATE_FILTERS, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.payload,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.payload],
      };
    case UPDATE_NUMERIC_FILTERS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (item) => item !== action.payload,
          ),
        ],
      };
    default:
      return state;
  }
};

export const selectFilter = (state = INITIAL_STATE_SELECT, action) => {
  switch (action.type) {
    case SELECT_COLUMN:
      return {
        ...state,
        column: action.payload,
      };
    case SELECT_COMPARISON:
      return {
        ...state,
        comparison: action.payload,
      };
    case SELECT_NUMBER:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
