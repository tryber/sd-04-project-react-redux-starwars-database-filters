import { combineReducers } from 'redux';
import filters from './filters';
import apiReducer from './reducer';

export default combineReducers({ apiReducer, filters });
// import {
//   REQUEST_API,
//   REQUEST_API_SUCCESS,
//   REQUEST_API_ERROR,
//   HANDLE_CHANGE,
//   SAVE_FILTER_DATA,
//   REMOVE_FILTERS,
// } from '../actions';

// const INICIAL_STATE = {
//   isLoading: false,
//   data: [],
//   error: {},
//   filters: {
//     filterByName: {
//       name: '',
//     },
//     filterByNumericValues: [],
//   },
//   options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
// };

// const swPlanetsReducer = (state = INICIAL_STATE, action) => {
//   switch (action.type) {
//     case REQUEST_API:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case REQUEST_API_SUCCESS:
//       return {
//         ...state,
//         data: action.data,
//         isLoading: false,
//       };
//     case REQUEST_API_ERROR:
//       return {
//         ...state,
//         error: action.error,
//         isLoading: false,
//       };
//     case HANDLE_CHANGE:
//       return {
//         ...state,
//         filters: { ...state.filters, filterByName: { name: action.text } },
//       };
//     case SAVE_FILTER_DATA:
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           filterByNumericValues: [
//             ...state.filters.filterByNumericValues,
//             { column: action.column, comparison: action.comparison, value: action.number },
//           ],
//         },
//         options: state.options.filter((option) => option !== action.column),
//       };
//     case REMOVE_FILTERS:
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           filterByNumericValues: state.filters.filterByNumericValues.filter(
//             ({ column }) => column !== action.column,
//           ),
//         },
//         options: [...state.options, action.column],
//       };
//     default:
//       return state;
//   }
// };

// export default swPlanetsReducer;
