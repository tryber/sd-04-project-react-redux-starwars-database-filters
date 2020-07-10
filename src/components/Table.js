import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Table = ({ planets }) => (
  <div>
    StarWars Datatable with Filters
  </div>
);


const mapStateToProps = (state) => ({
  planets: state.reducer.data,
});

// Table.propTypes = {
//   planets: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(Table);
