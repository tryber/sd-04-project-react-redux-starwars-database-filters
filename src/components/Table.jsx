import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { connect } from 'react-redux';
import { requestFetch } from '../actions'

class Table extends Component {
  componentDidMount() {
    const { callAPI } = this.props;
    callAPI();
  }
  render() {
    return (
      <table className="t01">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  callAPI: () => dispatch(requestFetch()),
});

export default connect(null, mapDispatchToProps)(Table);
