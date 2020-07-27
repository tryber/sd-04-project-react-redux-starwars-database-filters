function filter(data, inputText, filterByNumericValues) {
  let filterData = [...data];

  if (inputText) {
    filterData = data.filter((planeta) =>
      planeta.name.toLowerCase().includes(inputText)
    );
  }
  if (filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach((itens) => {
      if (itens.comparison === 'maior que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) > Number([itens.value])
        );
        // console.log(filterData, itens.comparison);
      }
      if (itens.comparison === 'igual a') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) === Number([itens.value])
        );
      }
      if (itens.comparison === 'menor que') {
        filterData = filterData.filter(
          (item) => Number(item[itens.column]) < Number([itens.value])
        );
      }
    });
  }
  return filterData;
}

export default filter;
