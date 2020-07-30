const filterAll = (data, name, numericValues) => {
  return numericValues.length === 0
    ? data.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
        (acc, { column, comparison, value: number }) =>
          acc.filter((planet) => {
            switch (comparison) {
              case 'maior que':
                return planet.name.includes(name) && Number(planet[column]) > Number(number);
              case 'menor que':
                return planet.name.includes(name) && Number(planet[column]) < Number(number);
              case 'igual a':
                return planet.name.includes(name) && Number(planet[column]) === Number(number);
              default:
                return planet.name.includes(name);
            }
          }),
        data,
      );
};

export default filterAll;
