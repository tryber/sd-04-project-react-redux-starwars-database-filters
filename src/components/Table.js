import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions/actionAPI';

class Table extends React.Component {
  componentDidMount() {
    const { fetchingApi } = this.props;

    fetchingApi();
  }

  sortPlanets(data) {
    const {
      order: { column, sort },
    } = this.props;
    const selectCol = column.toLowerCase();
    let sortData = data;
    if (selectCol === 'name' || selectCol === 'climate' || selectCol === 'terrain') {
      sortData = sortData
        .sort((a, b) => (
          (a[selectCol]).localeCompare(b[selectCol])));
    }
    if (sort === 'ASC') sortData = sortData.sort((a, b) => a[column] - b[column]);
    if (sort === 'DESC') sortData = sortData.sort((a, b) => b[column] - a[column]);
    return sortData;
  }

  filterPlanets() {
    const { filterByNumericValues, data } = this.props;
    if (filterByNumericValues.length === 0) return this.sortPlanets(data);
    return filterByNumericValues.reduce((array, number) => {
      const { column, comparison, value } = number;
      return array.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      });
    }, this.sortPlanets(data));
  }

  render() {
    const { isFetching, filteredData, term } = this.props;
    if (isFetching) return <div>Loading</div>;
    const planets = term !== '' ? filteredData : this.filterPlanets();
    const titles = planets[0] ? Object.keys(planets[0]) : [];
    return (
      <table>
        <thead>
          <tr>
            {titles
              .filter((title) => title !== 'residents')
              .map((title) => (
                <th key={title}>{title.toUpperCase()}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet)
                .filter((_, index) => index !== 9)
                .map((value) => (
                  <td key={value}>{value}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchingApi: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  filteredData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  term: PropTypes.string,
  filterByNumericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  order: PropTypes.shape({
    sort: PropTypes.string,
    column: PropTypes.string,
  }).isRequired,
};

Table.defaultProps = {
  data: [],
  filteredData: [],
  term: '',
  filterByNumericValues: [],
};

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  data: state.planetReducer.data,
  term: state.filters.filterByName.name,
  filteredData: state.filters.filteredData,
  filterByNumericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
