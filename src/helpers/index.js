export const checkNamePlanet = (planetName, filterName) => planetName.includes(filterName);
export const checkFilters = (planet, filter) => {
    if (filter.comparison === 'maior que') return +(planet[filter.column]) > +(filter.value);
    if (filter.comparison === 'menor que') return +(planet[filter.column]) < +(filter.value);
    return +(planet[filter.column]) === +(filter.value);
};

// const valuesColumns = ['coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
// const valuesComparison = ['comparação', 'maior que', 'menor que', 'igual a'];

// filterByNumericValues: [
//   {
//     column: 'population',
//     comparison: 'maior que',
//     value: '100000',
//   }
// ]
