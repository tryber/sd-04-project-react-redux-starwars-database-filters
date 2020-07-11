import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Loading from './Loading';
import PropTypes from 'prop-types';

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

// Table.PropTypes = {
//   loading: PropTypes.bool.isRequired,
// };

export default connect(mapStateToProps)(Table);
