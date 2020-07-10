import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFetch } from '../../actions';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Loading from './Loading';

class Table extends Component {
  componentDidMount() {
    const { callAPI } = this.props;
    callAPI();
  }
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

const mapDispatchToProps = (dispatch) => ({
  callAPI: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
