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

const Table = (props) => {
  const { data, inputText, filterByNumericValues } = props;
  let filteredData = !inputText
    ? [...data]
    : [...data].filter((planet) => planet.name.includes(inputText));
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filtro) => {
      filteredData = filteredData.filter((planet) => filterPlanet(planet, filtro));
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0])
              .filter((header) => header !== 'residents')
              .map((chaveDoHeader) => (
                <th key={chaveDoHeader}>{chaveDoHeader}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((planet) => (
            <tr key={planet.name}>
              {Object.keys(data[0])
                .filter((header) => header !== 'residents')
                .map((column) => (
                  <td key={planet[column]}>{planet[column]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf().isRequired,
  filterByNumericValues: PropTypes.shape(Object).isRequired,
  inputText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.filters.data,
  inputText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
