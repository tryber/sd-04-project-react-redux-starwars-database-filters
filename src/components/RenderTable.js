import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const filterData = (datatable, name, numericFilters) => {
  let filteredData = [];
  if (name === '') filteredData = datatable;
  if (name !== '') {
    filteredData = datatable.filter((planet) => planet.name.includes(name));
  }
  if (numericFilters.length > 0) {
    numericFilters.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] > Number(filter.value),
        );
      }
      if (filter.comparison === 'menor que') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] < Number(filter.value),
        );
      }
      if (filter.comparison === 'igual a') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] === filter.value,
        );
      }
    });
  }
  return filteredData;
};

const RenderTable = ({ data, name, numericFilters }) => (
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
      {filterData(data, name, numericFilters).map(
        ({ residents, ...planet }) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ),
      )}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  data: state.starWarsAPIReducer.data,
  name: state.filters.filterByName.name,
  numericFilters: state.filters.filterByNumericValues,
});

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
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, null)(RenderTable);
