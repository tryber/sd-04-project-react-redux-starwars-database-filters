import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/*
consy { data } = this.props;
const keys = data.length >= 1 ? Object.keys(data[0]) : [];
const tableHeader = keys.filter((key) => key !== 'residents');

const getHeaders = (planets) => Object.keys(planets[0]).filter((header) => header !== 'residents');
 */

class Table extends React.Component {
  render() {
    const { data, name } = this.props;
    const keys = data.length >= 1 ? Object.keys(data[0]) : [];
    const tableHeader = keys.filter((key) => key !== 'residents');

    const filterName = data.filter((planet) => planet.name.includes(name));

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
            {filterName.map((planet) => (
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
};

const mapStateToProps = (state) => ({
  data: state.planets.data,
  name: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);
