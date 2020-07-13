import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compare, sortData } from '../util';
import TableBody from './TableBody';
import TableHead from './TableHead';
// To commit
const TableContent = ({ data, searchText, filterByNumericValues, order }) => {
  const objKeys =
    data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
  let planets = data.sort((a, b) => a.name.localeCompare(b.name));
  if (order.column !== 'Name') {
    planets = sortData(planets, order);
  }
  if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
    });
  }
  if (searchText !== '') {
    planets = planets.filter(
      (planet) =>
        planet.name.includes(searchText.toUpperCase()) ||
        planet.name.includes(searchText.toLowerCase()),
    );
  }
  return (
    <table className="table">
      <TableHead objKeys={objKeys} />
      <TableBody planets={planets} objKeys={objKeys} />
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.swAPI.data,
  searchText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

TableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.shape({ column: PropTypes.string, order: PropTypes.string }).isRequired,
};

export default connect(mapStateToProps)(TableContent);
