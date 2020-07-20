import React from 'react';

const getHeaders = (planets) => Object.keys(planets[0]).filter((header) => header !== 'residents');

const renderHeader = (planets) => {
  const tableHeaders = getHeaders(planets);

  return (
    <thead>
      <tr>
        {tableHeaders.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

const handlePlanetSort = (planets, order) => {
  const { column, sort } = order;

  return planets.sort((planetA, planetB) => {
    if (sort === 'ASC') {
      return planetA[column.toLowerCase()] > planetB[column.toLowerCase()] ? 1 : -1;
    }
    if (sort === 'DESC') {
      return planetA[column.toLowerCase()] < planetB[column.toLowerCase()] ? 1 : -1;
    }
  });
};

const renderData = (planets, order) => {
  const planetsData = [];
  const sortedPlanets = handlePlanetSort(planets, order);

  sortedPlanets.forEach((planet) => {
    const columns = Object.keys(planet)
      .filter((header) => header !== 'residents')
      .map((data) => <td>{planet[data]}</td>);

    planetsData.push(<tr key={planet.name}>{columns}</tr>);
  });

  return planetsData;
};

const handleNameFilter = ({ filterByName }, planets) => {
  let filterResult = planets;

  if (filterByName.name) {
    filterResult = planets
      .filter((planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()));
  }

  return filterResult;
};

const handleNumericFilter = ({ filterByNumericValues }, planets) => {
  let filterResult = planets;

  filterByNumericValues.forEach((filter) => {
    const { column, comparison, value } = filter;
    if (comparison === 'maior que') {
      filterResult = filterResult.filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'igual a') {
      filterResult = filterResult.filter((planet) => Number(planet[column]) === Number(value));
    }
    if (comparison === 'menor que') {
      filterResult = filterResult.filter((planet) => Number(planet[column]) < Number(value));
    }
  });

  return filterResult;
};

const Table = ({ planets, filters }) => {
  let filteredPlanets = planets;

  if (filters.filterByName.name) {
    filteredPlanets = handleNameFilter(filters, planets);
  }

  if (filters.filterByNumericValues.length > 0) {
    filteredPlanets = handleNumericFilter(filters, planets);
  }

  return (
    <table>
      {renderHeader(planets, filters)}
      <tbody>{renderData(filteredPlanets, filters.order)}</tbody>
    </table>
  );
};

export default Table;
