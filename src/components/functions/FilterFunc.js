const orderPlanet = (column, sort, planets) => {
  const sortPlanets = [...planets];
  if (!Number(sortPlanets[0][column])) {
    sortPlanets.sort(function (a, b) {
      const item = a[column];
      const itemProx = b[column];

      if (item < itemProx) {
        return -1;
      }
      if (item > itemProx) {
        return 1;
      }
      return 0;
    });
  } else {
    sortPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  return sort === 'ASC' ? sortPlanets : sortPlanets.reverse();
};

const filterFunc = (dataPlanets, name, numericValues, collum, sort) => {
  const result =
    numericValues.length === 0
      ? dataPlanets.filter((planet) => planet.name.includes(name))
      : numericValues.reduce(
          (accumulator, { column, comparison, value }) =>
            accumulator.filter((planet) => {
              switch (comparison) {
                case 'maior que':
                  return planet.name.includes(name) && Number(planet[column]) > Number(value);
                case 'menor que':
                  return planet.name.includes(name) && Number(planet[column]) < Number(value);
                case 'igual a':
                  return planet.name.includes(name) && Number(planet[column]) === Number(value);
                default:
                  return planet.name.includes(name);
              }
            }),
          dataPlanets,
        );
  return orderPlanet(collum, sort, result);
};

export default filterFunc;
