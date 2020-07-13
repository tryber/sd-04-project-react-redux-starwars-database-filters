// action para solicitar uma api
import api from '../services/api';

export const API_REQUISITION = 'API_REQUISITION';
export const API_REQUISITION_SUCCESS = 'API_REQUISITION_SUCCESS';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const NUMERIC_FILTER = 'NUMERIC_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';

const apiRequisition = () => ({
  type: API_REQUISITION,
});

const apiRequisitionSuccess = (dados) => ({
  type: API_REQUISITION_SUCCESS,
  dados,
});

export default function fetchApiRequisition() {
  return (dispatch) => {
    dispatch(apiRequisition());

    return api()
      .then(
        (dados) => dispatch(apiRequisitionSuccess(dados.results)),
      );
  };
}

// Actions de filtros

export const searchText = (name) => ({
  type: SEARCH_TEXT,
  name,
});

export const numericFilter = (state) => ({
  type: NUMERIC_FILTER,
  state,
});

export const deleteFilter = (column) => ({
  type: DELETE_FILTER,
  column,
});
