import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getPlanetsAPIAct } from '../actions';

const filterPlanet = (planet, filter) => {
  const { column, comparison, value } = filter;
  if (comparison === 'maior que') {
    return Number(planet[column]) > Number(value);
  }
  if (comparison === 'menor que') {
    return Number(planet[column]) < Number(value);
  }
  if (comparison === 'igual a') {
    return Number(planet[column]) === Number(value);
  }
  return false;
};

const ordering = (column, sort, planets) => {
  const newPlanets = [...planets];
  if (!Number(newPlanets[0][column])) {
    newPlanets.sort(function (a, b) {
      const x = a[column].toLowerCase();
      const y = b[column].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else {
    newPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  if (sort === 'ASC') return newPlanets;
  if (sort === 'DESC') return newPlanets.reverse();
  return newPlanets;
};

const CreateTableHeader = (data) => (
  <tr>
    {Object.keys(data)
      .filter((header) => header !== 'residents')
      .map((chaveDoHeader) => (
        <th key={chaveDoHeader}>{chaveDoHeader}</th>
      ))}
  </tr>
);
const CreateTableBody = (data, filteredData) => filteredData.map((planet) => (
  <tr key={planet.name}>
    {Object.keys(data[0])
      .filter((header) => header !== 'residents')
      .map((column) => (
        <td key={planet[column]}>{planet[column]}</td>
      ))}
  </tr>
));
const Table = (props) => {
  const {
    data, inputText, filterByNumericValues, order,
  } = props;
  let filteredData = !inputText
    ? [...data]
    : [...data].filter((planet) => planet.name.includes(inputText));
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filtro) => {
      filteredData = filteredData.filter((planet) => filterPlanet(planet, filtro));
    });
  }
  if (order) {
    filteredData = ordering(order.column, order.sort, filteredData);
  }
  return (
    <div>
      <table>
        <thead>{CreateTableHeader(data[0])}</thead>
        <tbody>{CreateTableBody(data, filteredData)}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf().isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.func).isRequired,
  inputText: PropTypes.string.isRequired,
  order: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.filters.data,
  inputText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  ...state.OrderFilterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
