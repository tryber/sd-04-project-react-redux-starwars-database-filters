import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TableContent = (props) => {
  const { data, searchText } = props;
  const objKeys = data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
  let planets = data;
  if (searchText !== '') {
    planets = planets.filter(
      (planet) =>
        planet.name.includes(searchText.toUpperCase()) ||
        planet.name.includes(searchText.toLowerCase()),
    );
  }
  return (
    <table>
      <thead>
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
});

TableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TableContent);
