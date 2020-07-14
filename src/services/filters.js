const fComp = (filteredData, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return filteredData.filter(
        (child) => Number(child[column]) > Number(value)
      );
    case 'igual a':
      return filteredData.filter(
        (child) => Number(child[column]) === Number(value)
      );
    case 'menor que':
      return filteredData.filter(
        (child) => Number(child[column]) < Number(value)
      );
    default:
      return false;
  }
};

const filter = (data, filterName, filterNumber) => {
  if (filterNumber.length !== 0) {
    let filteredData = [...data];
    filterNumber.forEach(({ column, comparison, value }) => {
      filteredData = fComp(filteredData, column, comparison, value);
    });
    return filteredData;
  }
  if (filterName) {
    return data.filter((child) => child.name.includes(filterName));
    return data;
  }
};

export default filter;
