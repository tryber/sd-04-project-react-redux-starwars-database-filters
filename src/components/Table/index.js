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

const Table = ({ planets }) => {
  return (
    <table>
      {renderHeader(planets)}
      <tbody>{renderData(planets)}</tbody>
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
