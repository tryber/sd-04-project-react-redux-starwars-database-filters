import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getPlanetsAPIAct } from '../actions';

const Table = (props) => {
  const { data, inputText } = props;
  const filteredData = !inputText
    ? [...data]
    : [...data].filter((planet) => planet.name.includes(inputText));
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).filter((header) => header !== 'residents')
              .map((chaveDoHeader) => (
                <th key={chaveDoHeader}>{chaveDoHeader}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((planet) => (
            <tr key={planet.name}>
              {Object.keys(data[0]).filter((header) => header !== 'residents')
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
  data: PropTypes.arrayOf(Object).isRequired,
  inputText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.listaReducers.data,
  inputText: state.listaReducers.inputText,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getPlanetsAPIAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
