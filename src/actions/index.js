// action para solicitar uma api
export API_REQUISITION = 'API_REQUISITION';

const api_requisition = (endPoint) => ({
  type: API_REQUISITION,
  payload: endPoint,
})