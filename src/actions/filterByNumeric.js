export const SET_FILTER_VARIABLES = 'SET_FILTER_VARIABLES';
export const SET_FILTERED_BY_NUMERIC = 'SET_FILTERED_BY_NUMERIC';


export function setNumericFilterVariables(column, comparison, value) {
  return {
    type: SET_FILTER_VARIABLES,
    column,
    comparison,
    value,
  };
}

export default function setPlanetsFilteredByNumeric(data) {
  return {
    type: SET_FILTERED_BY_NUMERIC,
    data,
  };
}
