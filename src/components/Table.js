import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

function filterByText(planets, text) {
  return planets.filter((planet) => text === '' || planet.name.includes(text));
}

const filterForComparison = (planet, column, comparison, value) => {
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

class Table extends React.Component {
  filterNumeric(filteredData) {
    const { filterByNumericValues } = this.props;
    return filterByNumericValues.reduce(
      (acc, { column, comparison, value }) => acc.filter((planet) => filterForComparison(
        planet, column, comparison, value,
      )), filteredData,
    );
  }

  render() {
    const { data, isLoading, name } = this.props;
    let dataPlanets = data;
    dataPlanets = filterByText(data, name);
    dataPlanets = this.filterNumeric(dataPlanets);

    if (isLoading) {
      return (
        <h5 className="progress-bar bg-danger progress-bar-striped progress-bar-animated">
          Loading...
        </h5>
      );
    }

    return (
      <table className="table table-bordered table-dark">
        <tbody>
          {data.length > 0 && <TableHeader heads={Object.keys(data[0])} />}
          {data.length > 0 && dataPlanets.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({
  planetsReducer: { data, isLoading },
  filters: {
    filterByName: { name },
    filterByNumericValues,
  },
}) => ({
  data,
  name,
  isLoading,
  filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  filterByNumericValues: [{}],
};

export default connect(mapStateToProps)(Table);
