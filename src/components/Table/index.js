import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const { fetching } = this.props;
    return fetching ? (
      <div>LOADING...</div>
    ) : (
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  // data: state.data,
  fetching: state.fetching,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  fetching: PropTypes.bool.isRequired,
};
