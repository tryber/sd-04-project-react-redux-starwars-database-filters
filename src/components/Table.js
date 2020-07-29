import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import filterFunc from './helpers/filterFunc';

/*
consy { data } = this.props;
const keys = data.length >= 1 ? Object.keys(data[0]) : [];
const tableHeader = keys.filter((key) => key !== 'residents');

const getHeaders = (planets) => Object.keys(planets[0]).filter((header) => header !== 'residents');
 */

class Table extends React.Component {
  render() {
    const { data, name, numericValues } = this.props;
    const keys = data.length >= 1 ? Object.keys(data[0]) : [];
    const tableHeader = keys.filter((key) => key !== 'residents');
    const dataPlanets = filterFunc(data, name, numericValues);

    return (
      <div>
        <table>
          <thead>
            <tr>
              {tableHeader.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dataPlanets.map((planet) => (
              <tr key={planet.name}>
                {tableHeader.map((column) => (
                  <td key={planet[column]}>{planet[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
