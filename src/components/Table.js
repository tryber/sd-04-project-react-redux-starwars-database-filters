import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './SeachBar';
import Filters from './Filters';

const Table = (props) => {
  const { data, isFetching, searchText } = props;
  const objKeys =
    data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
  let planets = data;
  if (searchText !== '') {
    planets = planets.filter(
      (planet) =>
        planet.name.includes(searchText.toUpperCase()) ||
        planet.name.includes(searchText.toLowerCase()),
    );
  }

  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>StarWars Datatable with Filters</div>
      <SearchBar />
      <Filters />
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  data: state.data,
  searchText: state.filters.filterByName.name,
  columnFilter: state.filters.filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Table);
