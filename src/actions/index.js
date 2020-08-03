import getPlanetsAPI from '../services';

export const requestApi = () => ({ type: 'REQUEST_API' });
export const successApi = (data) => ({ type: 'SUCCESS', data });
export const changeInputAct = ({ value }) => ({
  type: 'CHANGE_TEXT_INPUT',
  value,
});
export const changeInputCompAct = ({ name, value }) => ({
  type: 'CHANGE_TEXT_INPUT_COMPARISOR',
  name,
  value,
});
export const filterCompAct = (column, comparison, value) => ({
  type: 'COMPARISOR',
  column,
  comparison,
  value,
});
export function getPlanetsAPIAct() {
  return (dispatch) => {
    dispatch(requestApi());
    return getPlanetsAPI().then((data) => dispatch(successApi(data)));
  };
}
export const removeFilterAct = (c) => ({
  type: 'REMOVE_FILTER',
  c,
});
export const submitRadioAct = (column, order) => ({
  type: 'SUBMIT_RADIO',
  column,
  order,
});
