const numericFilter = (filteredPlanets, numberFilter) => {
  if (numberFilter.length === 0) { return filteredPlanets; }
  return (
    numberFilter.reduce((acc, cur) => {
      const { column, comparison, value } = cur;
      console.log(column, comparison, value);
      return (acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            console.log('maior que');
            return Number(planet[column]) > Number(value);
          case 'menor que':
            console.log('menor que');
            return Number(planet[column]) < Number(value);
          case 'igual a':
            console.log('igual a');
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      }));
    }, filteredPlanets)
  );
};


export default numericFilter;
