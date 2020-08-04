import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { sortBy } from '../actions/actionFilter';
import { fetchApi } from '../actions/actionAPI';

class Table extends React.Component {
  componentDidMount() {
    const { fetchingApi } = this.props;

    fetchingApi();
    // const sortData = data.()
    // dataSortBy(sortData, "ASC", "Name")
  }

  filterPlanets() {
    const { filterByNumericValues, filteredBySort } = this.props;
    if (filterByNumericValues.length === 0) return filteredBySort;
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
    }, filteredBySort);
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
  // data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  filteredBySort: PropTypes.arrayOf(
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
      value: PropTypes.number,
    }),
  ),
};

Table.defaultProps = {
  // data: [],
  filteredBySort: [],
  filteredData: [],
  term: '',
  filterByNumericValues: [],
};

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  data: state.planetReducer.data,
  filteredBySort: state.filters.filteredBySort,
  term: state.filters.filterByName.name,
  filteredData: state.filters.filteredData,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingApi: () => dispatch(fetchApi()),
  // dataSortBy: (data, column, sort) => dispatch(sortBy(data, column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
