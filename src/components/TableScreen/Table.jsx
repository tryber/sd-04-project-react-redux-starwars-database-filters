import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Loading from './Loading';

class Table extends Component {
  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <table className="t01">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducerAPI.isFetching,
});

export default connect(mapStateToProps)(Table);
