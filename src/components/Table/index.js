import React from 'react';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import TableBody from './TableBody';
// import { createStore } from 'redux';

const Table = ({ fetching }) => {
  return fetching ? (
    <div>LOADING...</div>
  ) : (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
};

const mapStateToProps = (state) => ({
  // data: state.data,
  fetching: state.fetching,
});

export default connect(mapStateToProps)(Table);
