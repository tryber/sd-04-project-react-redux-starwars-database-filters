export const SET_FILTER_VARIABLES = 'SET_FILTER_VARIABLES';
export const SET_FILTERED_BY_NUMERIC = 'SET_FILTERED_BY_NUMERIC';

export function setNumericFilterVariables(filter) {
  return {
    type: SET_FILTER_VARIABLES,
    column: filter.column,
    comparison: filter.comparison,
    value: filter.value,
  };
}

export const setPlanetsFilteredByNumeric = () => ({ type: SET_FILTERED_BY_NUMERIC });

// export function setPlanetsFilteredByNumeric(planets) {
//   return {
//     type: SET_FILTERED_BY_NUMERIC,
//     planets,
//   };
// }

// const { column } = filters[0];

// const planets = column
//   ? filters.reduce((acc, filter) => {
//     console.log('acc');
//     acc = applyNumericFilter(acc, filter);
//     return acc;
//   }, planetsReceived)
//   : planetsReceived;
