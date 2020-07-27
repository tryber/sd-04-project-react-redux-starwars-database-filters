import React, { Component } from 'react';
import { conect } from 'react-redux';
import { requestFetch } from '../action/index'

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

export default conect(mapStateToProps, mapDispatchToProps)(Home);
