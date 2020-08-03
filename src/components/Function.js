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
      case 'name':
        asc = before.name.localeCompare(actual.name);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'rotation_period':
        asc = actual.rotation_period - before.rotation_period;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'orbital_period':
        asc = actual.orbital_period - before.orbital_period;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'diameter':
        asc = actual.diameter - before.diameter;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'climate':
        asc = actual.climate.localeCompare(before.climate);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'gravity':
        asc = actual.gravity.localeCompare(before.gravity);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'terrain':
        asc = actual.terrain.localeCompare(before.terrain);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'surface_water':
        asc = actual.surface_water - before.surface_water;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'population':
        asc = actual.population - before.population;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'residents':
        asc = actual.residents.localeCompare(before.residents);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'films':
        asc = actual.films.localeCompare(before.films);
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'created':
        asc = actual.created - before.created;
        return order.sort === 'ASC' ? asc : asc * -1;
      case 'edited':
        asc = actual.edited - before.edited;
        return order.sort === 'ASC' ? asc : asc * -1;
      default:
        asc = actual.name.localeCompare(before.name);
        return order.sort === 'ASC' ? asc : asc * -1;
    }
  });
  return sorter;
};

export default dataOrganization;
