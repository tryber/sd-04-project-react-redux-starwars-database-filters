const filterFunc = (planets, name, numericValues) => (numericValues.length === 0
  ? planets.filter((planet) => planet.name.includes(name))
  : numericValues.reduce(
    (acc, { column, comparison, value }) => acc.filter((planet) => {
      switch (comparison) {
        case 'maior que':
          return planet.name.includes(name) && parseFloat(planet[column]) > parseFloat(value);
        case 'menor que':
          return planet.name.includes(name) && parseFloat(planet[column]) < parseFloat(value);
        case 'igual a':
          return (
            planet.name.includes(name) && parseFloat(planet[column]) === parseFloat(value)
          );
        default:
          return planet.name.includes(name);
      }
    }),
    planets,
  ));

const dataSort = (planets, name, numericValues, order) => {
  console.log(order);
  const data = filterFunc(planets, name, numericValues);
  const sort = data.sort((before, after) => {
    const asc = before[order.column].localeCompare(after[order.column], 'pt-br', { numeric: true });
    return order.sort === 'ASC' ? asc : asc * -1;
  });
  return sort;
};

export default dataSort;
