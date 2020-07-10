export const INPUT_FILTER = 'INPUT_FILTER';
export const DATA_FILTER = 'DATA_FILTER';

const setInputFilter = (name) => ({ type: INPUT_FILTER, name });
const setDataFilter = (data) => ({ type: DATA_FILTER, data });

export default function filterPlanets(data, string) {
  return (dispatch) => {
    dispatch(setInputFilter(string));
    const filteredData = data.filter(({ name }) => name
      .toLowerCase()
      .includes(string.toLowerCase()));
    return dispatch(setDataFilter(filteredData));
  };
}
