function FiltersFunc(planets, name, numericValues) {
  return numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
      (acc, { column, comparison, value }) => acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(name) &&
                  Number(planet[column]) > Number(value)
            );
          case 'menor que':
            return (
              planet.name.includes(name) &&
                  Number(planet[column]) < Number(value)
            );
          case 'igual a':
            return (
              planet.name.includes(name) &&
                  Number(planet[column]) === Number(value)
            );
          default:
            return planet.name.includes(name);
        }
      }),
      planets,
    );
}

const dataOrganization = (planets, name, numericValues, order) => {
  const data = FiltersFunc(planets, name, numericValues, order);
  const sorter = data.sort((actual, before) => {
    let asc = '';
    switch (order.column) {
      case 'name': asc = before.name.localeCompare(actual.name); break;
      case 'rotation_period': asc = actual.rotation_period - before.rotation_period; break;
      case 'orbital_period': asc = actual.orbital_period - before.orbital_period; break;
      case 'diameter': asc = actual.diameter - before.diameter; break;
      case 'climate': asc = actual.climate.localeCompare(before.climate); break;
      case 'gravity': asc = actual.gravity.localeCompare(before.gravity); break;
      case 'terrain': asc = actual.terrain.localeCompare(before.terrain); break;
      case 'surface_water': asc = actual.surface_water - before.surface_water; break;
      case 'population': asc = actual.population - before.population; break;
      case 'residents': asc = actual.residents.localeCompare(before.residents); break;
      case 'films': asc = actual.films.localeCompare(before.films); break;
      case 'created': asc = actual.created - before.created; break;
      case 'edited': asc = actual.edited - before.edited; break;
      default: asc = actual.name.localeCompare(before.name);
    }
    return order.sort === 'ASC' ? asc : asc * -1;
  });
  return sorter;
};

export default dataOrganization;
