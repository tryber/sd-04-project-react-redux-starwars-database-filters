import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Table = ({ data, error }) => {
  console.log(error);
  const keys = (data.results) ? Object.keys(data.results[0]) : [];
  const planets = (data.results) ? data.results : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  // console.log(tableHeader);
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((column, index) => <th key={index}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={planet}>
            {tableHeader.map((column, index) => <td key={index}>{planet[column]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const mapStateToProps = (state) => ({
  data: state.reducer.data,
  error: state.reducer.error,
});

// Table.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(Table);
