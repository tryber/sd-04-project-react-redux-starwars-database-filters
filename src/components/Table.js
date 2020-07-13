import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateHeadings from '../components/CreateHeadings';
import CreateBody from '../components/CreateBody';

const filter = (data, name, filterByNumericValues) => {
  let filteredData = [...data];
  if (filterByNumericValues.length >= 1) {
    filterByNumericValues.map(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filteredData = filteredData.filter((planet) => Number(planet[column]) > Number(value));
      }
      if (comparison === 'menor que') {
        filteredData = filteredData.filter((planet) => Number(planet[column]) < Number(value));
      }
      if (comparison === 'igual a') {
        filteredData = filteredData.filter((planet) => Number(planet[column]) === Number(value));
      }
      return filteredData;
    });
  }

  if (name) return data.filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));
  return filteredData;
};

const Table = ({ isLoading, data, name, filterByNumericValues }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={filter(data, name, filterByNumericValues)} />
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.planetsReducer.isLoading,
  data: state.planetsReducer.data,
  name: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
