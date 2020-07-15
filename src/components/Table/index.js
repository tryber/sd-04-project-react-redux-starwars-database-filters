import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import TableHead from './TableHead';
import TableBody from './TableBody';
// import { createStore } from 'redux';

const Table = ({ fetching }) => (
  fetching ? (
    <div>LOADING...</div>
  ) : (
    <table>
      <TableHead />
      <TableBody />
    </table>
  )
);

const mapStateToProps = (state) => ({
  // data: state.data,
  fetching: state.fetching,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  fetching: PropTypes.bool.isRequired
};
