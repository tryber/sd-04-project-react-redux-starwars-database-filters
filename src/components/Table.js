import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import TableBody from './TableBody';


class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <TableHead />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default connect(null, null)(Table);
