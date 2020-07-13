import FILTER_BY_NAME from './actionTypes';

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export default filterByName;
