const filterFunc = (dataPlanets, name, numericValues) => {
  console.log(numericValues);
  return numericValues.length === 0
    ? dataPlanets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
        (accumulator, { column, comparison, value }) =>
          accumulator.filter((planet) => {
            switch (comparison) {
              case 'maior que':
                return planet.name.includes(name) && Number(planet[column]) > Number(value);
              case 'manor que':
                return planet.name.includes(name) && Number(planet[column]) < Number(value);
              case 'igual a':
                return planet.name.includes(name) && Number(planet[column]) === Number(value);
              default:
                return planet.name.includes(name);
            }
          }),
        dataPlanets,
      );
};

export default filterFunc;
