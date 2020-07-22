import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Loading from './Loading';

class Table extends Component {
  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <table className="table table-striped table-dark">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducerAPI.isFetching,
});

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);
