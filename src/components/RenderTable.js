import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RenderTable = ({ data, name }) => (
  <table>
    <thead>
      <tr>
        {Object.keys(data[0])
          .filter((element) => element !== 'residents')
          .map((key) => (
            <th key={key}>{key}</th>
          ))}
      </tr>
    </thead>
    <tbody>
      {data
        .filter((planet) => planet.name.includes(name))
        .map(({ residents, ...planet }) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  data: state.starWarsAPIReducer.data,
  name: state.filters.filterByName.name,
});

connect(mapStateToProps, null)(RenderTable);

RenderTable.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      diameter: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      gravity: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      films: PropTypes.array,
      url: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default RenderTable;
