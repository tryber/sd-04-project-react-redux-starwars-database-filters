const filterComparisons = (filteredData, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return filteredData.filter(
        (child) => Number(child[column]) > Number(value),
      );
    case 'igual a':
      return filteredData.filter(
        (child) => Number(child[column]) === Number(value),
      );
    case 'menor que':
      return filteredData.filter(
        (child) => Number(child[column]) < Number(value),
      );
    default:
      return false;
  }
};

const filterFunction = (data, filterName, filterNumber) => {
  if (filterNumber.length !== 0) {
    let filteredData = [...data];
    filterNumber.forEach(({ column, comparison, value }) => {
      filteredData = filterComparisons(filteredData, column, comparison, value);
    });
    return filteredData;
  }
  if (filterName) return data.filter((child) => child.name.toLowerCase().includes(filterName));
  return data;
};

export default filterFunction;
