import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleChange } from '../actions';
import FilterForms from './FilterForms';

const Table = ({ data, handleInput, inputText, filterByNumericValues }) => {
  // console.log(error);
  const comparisson = (planet, { column, comparison, value }) => {
    switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > (value);
      case 'menor que':
        return Number(planet[column]) < (value);
      case 'igual a':
        console.log(typeof (planet[column]));
        console.log(typeof ((value)));
        return Number(planet[column]) === (value);
      default:
        return false;
    }
  };

  const obj = filterByNumericValues[0];
  let planets = (data.results) ? data.results : [];
  const keys = (data.results) ? Object.keys(data.results[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  if (obj) {
    console.log(obj);
    planets = planets.filter((planet) => comparisson(planet, obj));
    console.log(planets);
  }

  if (inputText !== '') planets = planets.filter((planet) => planet.name.includes(inputText));

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
      <FilterForms />
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => <th key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {tableHeader.map((column) => <td key={planet[column]}>{planet[column]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = (state) => ({
  inputText: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (text) => dispatch(handleChange(text)),
});

Table.propTypes = {
  data: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  // error: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
