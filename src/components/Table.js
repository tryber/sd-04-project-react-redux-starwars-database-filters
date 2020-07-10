import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SeachBar';
import Filters from './Filters';

const Table = (props) => {
  const { data, isFetching, searchText } = props;
  const objKeys =
    data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
 
  // const compare = (planeta, column, comparison, value) => {
  //   console.log('entrou');
  //   console.log(comparison);
  //   switch (comparison) {
  //     case 'menor que':
  //       console.log(planeta[column]);
  //       return planeta[column] < Number(value);
  //     case 'maior que':
  //       return planeta[column] > Number(value);
  //     default:
  //       return true;
  //   }
  // };
  // if (filterByNumber !== []) {
  //   const numericFilter = filterByNumber[0];
  //   console.log(numericFilter)
  //   const { column, comparison, value } = numericFilter;
  //   planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
  // }

  let planets = data;
  if (searchText !== '')
    planets = planets.filter(
      (planet) =>
        planet.name.includes(searchText.toUpperCase()) ||
        planet.name.includes(searchText.toLowerCase()),
    );

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
            {objKeys.map((objKey, index) => (
              <th key={index}>{objKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={index}>
              {objKeys.map((objKey, index) => (
                <td key={index}>{planet[objKey]}</td>
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

export default connect(mapStateToProps, null)(Table);
