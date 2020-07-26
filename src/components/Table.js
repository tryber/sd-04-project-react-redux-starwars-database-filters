import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { connect } from 'react-redux';

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

export default connect(null, null) (Table);
