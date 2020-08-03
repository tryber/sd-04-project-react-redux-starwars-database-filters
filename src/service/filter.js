function filter(data, inputText, filterByNumericValues) {
  let filterData = [...data];

  if (inputText) {
    filterData = data.filter((planeta) =>
      planeta.name.toLowerCase().includes(inputText),
    );
  }
  if (filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach((itens) => {
      if (itens.comparison === 'maior que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) > Number([itens.value]),
        );
        // console.log(filterData, itens.comparison);
      }
      if (itens.comparison === 'igual a') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) === Number([itens.value]),
        );
      }
      if (itens.comparison === 'menor que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) < Number([itens.value]),
        );
      }
    });
  }
  return filterData;
}

const numericKeys = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const ascSortNumber = (filtered, column) =>
  filtered.sort((a, b) => Number(a[column]) - Number(b[column]));

const ascSortString = (filtered, column) =>
  filtered.sort((a, b) => {
    if (a[column] > b[column]) return 1;
    if (a[column] < b[column]) return -1;
    return 0;
  });

const orderAscDesc = (filtered, column, sort) => {
  const sorted = numericKeys.includes(column)
    ? ascSortNumber(filtered, column)
    : ascSortString(filtered, column);
  return sort === 'DESC' ? sorted.reverse() : sorted;
};

export {filter, orderAscDesc};
