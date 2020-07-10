// action para solicitar uma api
import api from '../services/api';

export const API_REQUISITION = 'API_REQUISITION';
export const API_REQUISITION_SUCCESS = 'API_REQUISITION_SUCCESS';

const apiRequisition = () => ({
  type: API_REQUISITION,
});

const apiRequisitionSuccess = (dados) => ({
  type: API_REQUISITION_SUCCESS,
  dados,
});

export default function fetchApiRequisition(endPoint) {
  return (dispatch) => {
    dispatch(apiRequisition());

    return api(endPoint)
      .then(
        (dados) => dispatch(apiRequisitionSuccess(dados.results))
      );
  };
}
