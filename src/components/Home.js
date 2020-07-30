import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import fetchPlanets from '../actions';
import './HomeLoading.css';
import './Home.css';

export class Home extends Component {
  componentDidMount() {
    const { buscaPlaneta } = this.props;
    buscaPlaneta();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <span className="home-loading">Loading...</span>;

    return (
      <div className="home">
        <h1 className="home-title">Star Wars DataTable</h1>
        <Table />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.getPlanets.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buscaPlaneta: () => dispatch(fetchPlanets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
