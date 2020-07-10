import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Table = ({ data, error }) => {
  // console.log(error);
  const keys = (data.results) ? Object.keys(data.results[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  // console.log(tableHeader);
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((column) => <th key={column}>{column}</th>)}
        </tr>

      </thead>

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
