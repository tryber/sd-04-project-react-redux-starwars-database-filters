import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateHeadings from '../components/CreateHeadings';
import CreateBody from '../components/CreateBody';

const filter = (data, name, filterByNumericValues) => {
  // colocar order
  let filteredData = [...data];

  filteredData = data.sort((a, b) => {
    // setting the starting order
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  if (filterByNumericValues.length >= 1) {
    // setting the order according to user comparison choices
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
      return false;
    });
  }

  if (name) return data.filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));

  return filteredData;
};

const Table = ({ isLoading, data, name, filterByNumericValues, order }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={filter(data, name, filterByNumericValues, order)} />
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.planetsReducer.isLoading,
  data: state.planetsReducer.data,
  name: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.objectOf(PropTypes.string).isRequired,
};
