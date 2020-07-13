const filterComparisons = (filteredData, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return filteredData.filter((child) => Number(child[column]) > Number(value));
    case 'igual a':
      return filteredData.filter((child) => Number(child[column]) === Number(value));
    case 'menor que':
      return filteredData.filter((child) => Number(child[column]) < Number(value));
    default:
      return false;
  }
};
const notNumbers = [
  'name',
  'climate',
  'terrain',
  'residents',
  'films',
  'created',
  'edited',
];

// função pra ordernar números ou strings em ordem ASC ou DESC:
const compare = (type, order = 'ASC') => (a, b) => {
  let comparison = 0;

  const varA = !notNumbers.includes(type) ? Number(a[type]) : a[type];
  const varB = !notNumbers.includes(type) ? Number(b[type]) : b[type];

  if (varA > varB) {
    comparison = 1;
  } else if (varA < varB) {
    comparison = -1;
  }
  return order === 'DESC' ? comparison * -1 : comparison;
};

// função principal do filter, que recebe todos os possíveis parametros de filtragem da app:
const filterFunction = (data, filterName, filterNumber, order) => {
  let filteredData = [...data];
  if (filterNumber.length !== 0) {
    filterNumber.forEach(({ column, comparison, value }) => {
      filteredData = filterComparisons(filteredData, column, comparison, value);
    });
  }
  if (filterName) filteredData = data.filter((obj) => obj.name.toLowerCase().includes(filterName));
  if (order) filteredData.sort(compare(order.column.toLowerCase(), order.sort));
  return filteredData;
};

export default filterFunction;
