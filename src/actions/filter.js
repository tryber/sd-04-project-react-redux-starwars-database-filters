const FILTER_BY_NAME = 'FILTER_BY_NAME';

const filterByName = (data) => ({
  type: FILTER_BY_NAME,
  data,
});

export default filterByName;
