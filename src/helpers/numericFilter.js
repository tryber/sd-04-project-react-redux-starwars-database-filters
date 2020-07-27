const numericFilter = (planets, numberFilter) => {
  if (numberFilter.length === 0) { return planets; }
  return (
    numberFilter.reduce((acc, cur) => {
      const { column, comparison, value } = cur;
      if (!comparison || !column || !value) { return planets; }
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
    }, planets)
  );
};


export default numericFilter;
