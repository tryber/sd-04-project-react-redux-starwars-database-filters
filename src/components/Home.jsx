import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFetch } from '../action/index'
import Table from './table/table';

class Home extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <h1>Loading...</h1>
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
