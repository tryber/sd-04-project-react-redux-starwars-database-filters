import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/* const Table = ({isFetching, data}) => {
  return (
    <div>
      StarWars Datatable with Filters
      {console.log(data)}
      {console.log(isFetching)}
      {console.log(data)}
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}; */

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const keys = data.length >= 1 ? Object.keys(data[0]) : [];
    const tableHeader = keys.filter((key) => key !== 'residents');

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
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};
/*
consy { data } = this.props;
const keys = data.length >= 1 ? Object.keys(data[0]) : [];
const tableHeader = keys.filter((key) => key !== 'residents');

const getHeaders = (planets) => Object.keys(planets[0]).filter((header) => header !== 'residents');
 */
const mapStateToProps = (state) => ({
  data: state.planets.data,
});

export default connect(mapStateToProps)(Table);
