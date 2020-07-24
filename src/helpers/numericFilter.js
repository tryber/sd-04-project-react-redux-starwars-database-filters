const numericFilter = (filteredPlanets, numberFilter) => {
  if (numberFilter.length === 0) { return filteredPlanets; }
  return (
    numberFilter.reduce((acc, cur) => {
      const { column, comparison, value } = cur;
      return (acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      }));
    }, filteredPlanets)
  );
};


export default numericFilter;
