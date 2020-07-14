import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { handleFetch } from '../actions/fetchAction';
import TableHeaders from './TableHeaders';

const numericFilter = (planet, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return [];
  }
};

function filterByText(planets, text) {
  return planets.filter((planet) => text === '' || planet.name.toUpperCase().includes(text.toUpperCase()));
}

function sortBy(planetA, planetB, column) {
  let planet1 = planetA[column];
  let planet2 = planetB[column];
  if (Number(planet1) && Number(planet2)) {
    planet1 = Number(planet1);
    planet2 = Number(planet2);
    switch (true) {
      case planet1 > planet2:
        return 1;
      case planet1 < planet2:
        return -1;
      default:
        return 0;
    }
  }
  return planet1.toLowerCase().localeCompare(planet2.toLowerCase());
}
class Table extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    dispatchFetch();
  }

  sortfilter(data) {
    const { sort, column } = this.props;
    switch (sort) {
      case 'ASC':
        return data.sort((planetA, planetB) => sortBy(planetA, planetB, column.toLowerCase()));
      case 'DESC':
        return data.sort((planetA, planetB) => sortBy(
          planetA, planetB, column.toLowerCase(),
        )).reverse();
      default:
        return data;
    }
  }

  filterNumeric(filteredData) {
    const { filterByNumericValues } = this.props;
    return filterByNumericValues.reduce((acc, {
      column, comparison, value,
    }) => acc.filter((planet) => numericFilter(planet, column, comparison, value)), filteredData);
  }

  render() {
    const {
      data, name,
    } = this.props;
    let mapPlanets = data;
    mapPlanets = filterByText(mapPlanets, name);
    mapPlanets = this.filterNumeric(mapPlanets);
    mapPlanets = this.sortfilter(mapPlanets);
    return (
      <table border="1px">
        <tbody>
          {data.length > 0 && <TableHeaders heads={Object.keys(data[0])} />}
          {data.length > 0 ? mapPlanets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => <td key={value}>{value}</td>)}
            </tr>
          ))
            : <h2>Loading</h2>}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({
  requestReducer: { data },
  filters: {
    filterByName: { name },
    filterByNumericValues,
    order: { sort, column },
  },
}) => ({
  data,
  name,
  filterByNumericValues,
  sort,
  column,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: () => dispatch(handleFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  dispatchFetch: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  sort: propTypes.string.isRequired,
  column: propTypes.string.isRequired,
  filterByNumericValues: propTypes.arrayOf(propTypes.object),
};

Table.defaultProps = {
  filterByNumericValues: [{}],
};
