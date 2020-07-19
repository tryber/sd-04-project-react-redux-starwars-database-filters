import React from 'react';
import PropTypes from 'prop-types';

const renderHeader = (planets) => {
  const tableHeaders = Object.keys(planets[0]).filter((header) => header !== 'residents');

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

const renderData = (planets) => {
  const planetsData = [];

  planets.forEach((planet) => {
    const columns = Object.keys(planet)
      .filter((header) => header !== 'residents')
      .map((data) => <td>{planet[data]}</td>);

    planetsData.push(<tr key={planet.name}>{columns}</tr>);
  });

  return planetsData;
};

const handleFilters = ({ filterByName = '' }, planets) => {
  let filterResult = planets;

  if (filterByName) {
    filterResult = planets
      .filter((planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()));
  }
  return filterResult;
};

const Table = ({ planets, filters }) => {
  let filteredPlanets = planets;

  if (Object.keys(filters).length > 0) {
    filteredPlanets = handleFilters(filters, planets);
  }

  return (
    <table>
      {renderHeader(planets)}
      <tbody>{renderData(filteredPlanets)}</tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
    }),
  ).isRequired,
};
