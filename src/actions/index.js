import getPlanetsAPI from '../services';

export const requestApi = () => ({ type: 'REQUEST_API' });
export const successApi = (data) => ({ type: 'SUCCESS', data });
export const changeInputAct = ({ name, value }) => ({
  type: 'CHANGE_TEXT_INPUT',
  name,
  value,
});

export function getPlanetsAPIAct() {
  return (dispatch) => {
    dispatch(requestApi());
    return getPlanetsAPI().then((data) => dispatch(successApi(data)));
  };
}
