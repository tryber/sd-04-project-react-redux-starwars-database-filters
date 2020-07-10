export const SELECT_FILTER = 'SELECT_FILTER';

export default function filterSelectOptions(column, comparison, value) {
  return {
    type: SELECT_FILTER,
    column,
    comparison,
    value,
  };
}

// export default function filterPlanets(data, string) {
//   return (dispatch) => {
//     dispatch(setInputFilter(string));
//     const filteredData = data.filter(({ name }) => name
//       .toLowerCase()
//       .includes(string.toLowerCase()));
//     return dispatch(setDataFilter(filteredData));
//   };
// }
