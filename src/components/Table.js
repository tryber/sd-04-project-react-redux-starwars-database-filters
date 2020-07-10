import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleChange } from '../actions';

const Table = ({ data, handleInput, inputText }) => {
  // console.log(error);
  const keys = (data.results) ? Object.keys(data.results[0]) : [];
  let planets = (data.results) ? data.results : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  if (inputText !== '') planets = planets.filter((planet) => planet.name.includes(inputText));
  // console.log(tableHeader);
  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
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
