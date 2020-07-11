import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compare from '../util';

const TableContent = (props) => {
  const { data, searchText, filterByNumericValues } = props;
  const objKeys =
  data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
  let planets = data;
  if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
    const { column, comparison, value } = filterByNumericValues[0];
    planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
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
      <thead className="thead-dark">
        <tr>
          {objKeys.map((objKey) => (
            <th key={`${objKey} index`}>{objKey}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={`${planet.name} index`}>
            {objKeys.map((objKey) => (
              <td key={`${objKey} index 2`}>{planet[objKey]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.swAPI.data,
  searchText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

TableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableContent);
