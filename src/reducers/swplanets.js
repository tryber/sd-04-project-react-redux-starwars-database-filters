// import { REQUEST_SW_PLANETS, REQUEST_SW_PLANETS_SUCCESS, SEARCH_TEXT } from '../actions';

// const INITIAL_SW_PLANETS = {
//   isFetching: false,
//   data: [],
//   filters: {
//     filterByName: {
//       name: '',
//     },
//   },
// };

// const swPlanets = (state = INITIAL_SW_PLANETS, action) => {
//   switch (action.type) {
//     case REQUEST_SW_PLANETS:
//       return {
//         ...state,
//         isFetching: true,
//       };
//     case REQUEST_SW_PLANETS_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         data: action.results,
//       };
//     case SEARCH_TEXT:
//       return { ...state, filters: { filterByName: { name: action.searchText } } };
//     default:
//       return state;
//   }
// };

// export default swPlanets;
